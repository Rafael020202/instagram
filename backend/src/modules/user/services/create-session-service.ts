import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/app-error";
import createSessionDto from "../dto/create-session-dto";
import IUserRepository from "../repositories/user-repository";
import IHashProvider from "../providers/hash-provider/protocol";
import { ITokenProvider } from "../providers/token-provider/protocol";
import authConfig from "@config/auth-config";

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
    password?: string;
    created_at: Date;
    updated_at: Date;
  };
  token: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('TokenProvider')
    private tokenProvider: ITokenProvider
  ) {}

  public async execute(data: createSessionDto): Promise<IResponse> {
    const user = await this.userRepository.find({ filters: { email: data.email } });

    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    const passwordCompare = await this.hashProvider.compare(data.password, user.password);

    if (!passwordCompare) {
      throw new AppError('Senha incorreta');
    } 
    
    const token = this.tokenProvider.sign(authConfig.secret, {
      expiresIn: authConfig.expiresIn,
      subject: user.id
    });

    const response = {
        user,
        token
    } as IResponse;

    delete response.user.password;

    return response;
  }
}

export default CreateUserService;