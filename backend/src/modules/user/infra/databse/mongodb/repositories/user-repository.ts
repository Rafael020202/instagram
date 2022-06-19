import MongoDb from "@shared/infra/database/mongodb";
import CreateUserDto from "../../../../dto/create-user-dto";
import IUserRepository from "../../../../repositories/user-repository";
import User from "../../entities/user";

class UserRepository implements IUserRepository {
  constructor(
    private mongodb = new MongoDb()
  ) {}

  public async create (data: CreateUserDto): Promise<void> {
    const usersCollection = await this.mongodb.getCollection('users');

    await usersCollection.insertOne(data);
  }

  public async find (filter: any): Promise<User[]> {
    const usersCollection = await this.mongodb.getCollection('users');
    const filters: any[] = [];
    
    Object.keys(filter).forEach((key) => filters.push({[key]: filter[key]}));

    const result = await usersCollection.find({$or: [...filters]});
    const users: User[] = (await result.toArray()) as [];

    return users;
  }
}

export default UserRepository;