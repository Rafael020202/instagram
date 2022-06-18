import { container } from 'tsyringe';

import IHashProvider from './HashProvider/IHashProvider';
import Bcrypt from './HashProvider/implementation/BCrypt';

import JsonWebToken from './TokenProvider/implementation/JsonWebToken';
import { ITokenProvider } from './TokenProvider/ITokenProvider';


container.registerSingleton<IHashProvider>('HashProvider', Bcrypt);
container.registerSingleton<ITokenProvider>('TokenProvider', JsonWebToken);

export default container;