import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../services/create-user-service';

class UserController {
  public async create(request: Request, response: Response) {
    const createUserService = await container.resolve(CreateUserService);
   
    await createUserService.execute(request.body);
    
    return response.status(204).json({});
  }
}

export default UserController;