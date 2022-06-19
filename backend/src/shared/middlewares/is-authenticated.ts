import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from "tsyringe";

import AppError from '../errors/app-error';
import authConfig from '@config/auth-config';
import { ITokenProvider } from '@modules/user/providers/TokenProvider/ITokenProvider';


@injectable()
class IsAuthenticated {
    constructor(
        @inject('TokenProvider')
        private tokenProvider: ITokenProvider
    ){}

    public execute (request: Request, _: Response, next: NextFunction) {
        const authHeader = request.headers.authorization;
        console.log(request.headers.authorization)
        if (!authHeader) {
          throw new AppError('JWT is missing');
        }
      
        const [, token] = authHeader.split(' ');
      
        try{
          const { sub } = this.tokenProvider.verify(token, authConfig.secret);
          
          request.user = {
            id: sub
          }
          
        }catch(error){
          console.log(error)
          throw new AppError('Invalid JWT token');
        }
      
        return next();
    }
}

export default IsAuthenticated;