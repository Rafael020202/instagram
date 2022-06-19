import createUserDto  from '../dto/create-user-dto';
import User from '../infra/databse/entities/User';

interface IUserRepository {
  create(data: createUserDto): Promise<void>;
  find(data: any): Promise<User[]>;
}

export default IUserRepository;