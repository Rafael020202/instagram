import { container } from 'tsyringe';

import IHashProvider from './hash-provider/protocol';
import Bcrypt from './hash-provider/implementation/bcrypt';

import JsonWebToken from './token-provider/implementation/json-web-token';
import { ITokenProvider } from './token-provider/protocol';

import Uuid from './uniqueid-generator-provider/implementation/uuid';
import IUniqueIdGenerator from './uniqueid-generator-provider/protocol';

container.registerSingleton<IHashProvider>('HashProvider', Bcrypt);
container.registerSingleton<ITokenProvider>('TokenProvider', JsonWebToken);
container.registerSingleton<IUniqueIdGenerator>('UniqueIdGenerator', Uuid);

export default container;