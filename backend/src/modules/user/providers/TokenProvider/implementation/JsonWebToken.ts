import { sign } from 'jsonwebtoken';
import { ITokenProvider, ISignOptions } from '../ITokenProvider';

class JsonWebToken implements ITokenProvider {
  sign (secret: string, options: ISignOptions): string {
    return sign({}, secret, {
      subject: options.subject,
      expiresIn: options.expiresIn
    });
  }
}

export default JsonWebToken;