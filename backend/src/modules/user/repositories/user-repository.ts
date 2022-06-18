import createUserDto  from '../dto/create-user-dto';
import findUserDto from '../dto/find-user-dto';
import User from '../infra/databse/entities/User';

interface IUserRepository {
  create(data: createUserDto): Promise<void>;
  find(data: findUserDto): Promise<User | null>;
}

export default IUserRepository;