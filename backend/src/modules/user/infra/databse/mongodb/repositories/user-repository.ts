import MongoDb from "@shared/infra/database/mongodb";
import CreateUserDto from "../../../../dto/create-user-dto";
import FindUserDto from "../../../../dto/find-user-dto";
import IUserRepository from "../../../../repositories/user-repository";
import User from "../../entities/User";

class UserRepository implements IUserRepository {
  constructor(
    private mongodb = new MongoDb()
  ) {}

  public async create (data: CreateUserDto): Promise<void> {
    const usersCollection = await this.mongodb.getCollection('users');

    await usersCollection.insertOne(data);
  }

  public async find (data: FindUserDto): Promise<User | null> {
    const usersCollection = await this.mongodb.getCollection('users')
    const user = await usersCollection.findOne({...data.filters}) as any;
    
    if (!user) return null;

    return new User(user);
  }
}

export default UserRepository;