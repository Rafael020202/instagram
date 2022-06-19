import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/app-error";
import createUserDto from "../dto/create-user-dto";
import IHashProvider from "../providers/hash-provider/protocol";
import IUniqueIdGenerator from "../providers/uniqueid-generator-provider/protocol";
import IUserRepository from "../repositories/user-repository";

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('UniqueIdGenerator')
    private uidGenerator: IUniqueIdGenerator
  ) {}

  public async execute(data: createUserDto) {
    const [user] = await this.userRepository.find({ 
      email: data.email,
      nickname: data.nickname 
    });

    if (user) {
      const field = data.email === user.email ?'e-mail' :'nickname';
    
      throw new AppError(`Já existe um usuário com mesmo ${field}`);
    }

    data.password = await this.hashProvider.hash(data.password);
    data.id = this.uidGenerator.generate();

    await this.userRepository.create(data);
  }
}

export default CreateUserService;