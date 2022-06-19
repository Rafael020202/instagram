import { sign, verify } from 'jsonwebtoken';
import { ITokenProvider, ISignOptions, ITokenPayload } from '../protocol';

class JsonWebToken implements ITokenProvider {
  sign (secret: string, options: ISignOptions): string {
    return sign({}, secret, {
      subject: options.subject,
      expiresIn: options.expiresIn
    });
  }

  verify(token: string, secret: string): ITokenPayload {
    return verify(token, secret) as ITokenPayload;
  }
}

export default JsonWebToken;