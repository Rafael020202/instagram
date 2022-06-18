import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/app-error";
import createUserDto from "../dto/create-user-dto";
import IHashProvider from "../providers/HashProvider/IHashProvider";
import IUserRepository from "../repositories/user-repository";

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async execute(data: createUserDto) {
    const userExists = await this.userRepository.find({ filters: { email: data.email } });

    if (userExists) {
      throw new AppError('Usuário já existe');
    }

    data.password = await this.hashProvider.hash(data.password);

    await this.userRepository.create(data);
  }
}

export default CreateUserService;