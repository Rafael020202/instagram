import { container } from 'tsyringe';

import IHashProvider from './HashProvider/IHashProvider';
import Bcrypt from './HashProvider/implementation/BCrypt';

import JsonWebToken from './TokenProvider/implementation/JsonWebToken';
import { ITokenProvider } from './TokenProvider/ITokenProvider';

import Uuid from './UniqueIdGeneratorProvider/implementation/Uuid';
import IUniqueIdGenerator from './UniqueIdGeneratorProvider/IUniqueIdGenerator';

container.registerSingleton<IHashProvider>('HashProvider', Bcrypt);
container.registerSingleton<ITokenProvider>('TokenProvider', JsonWebToken);
container.registerSingleton<IUniqueIdGenerator>('UniqueIdGenerator', Uuid);

export default container;