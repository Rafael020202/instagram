import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../errors/app-error';
import authConfig from '../../config/auth-config';

interface ITokenPayload {
  sub: string;
};

class isAuthenticated {
    constructor(
    ){}

    public execute (request: Request, _: Response, next: NextFunction) {
        const authHeader = request.headers.authorization;
        console.log(request.headers.authorization)
        if (!authHeader) {
          throw new AppError('JWT is missing');
        }
      
        const [, token] = authHeader.split(' ');
      
        try{
          const { sub } = verify(token, authConfig.secret) as ITokenPayload;
          
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

export default isAuthenticated;