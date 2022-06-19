import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSessionService from '../services/create-session-service';

class SessionController {
  public async create(request: Request, response: Response) {
    const createSessionService = await container.resolve(CreateSessionService);
    const result = await createSessionService.execute(request.body);
    
    return response.status(200).json(result);
  }
}

export default SessionController;