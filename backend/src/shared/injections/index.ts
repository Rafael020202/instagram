import { container } from "tsyringe";

import MongoDb from "../infra/database/mongodb";

import UserRepository from "../../modules/user/infra/databse/mongodb/repositories/user-repository";
import IUserRepository from "../../modules/user/repositories/user-repository";

import '../../modules/user/providers';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton('MongoDb', MongoDb);