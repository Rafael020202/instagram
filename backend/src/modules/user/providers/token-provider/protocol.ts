export interface ISignOptions {
  subject: any;
  expiresIn: string;
};

export interface ITokenPayload {
    sub: string;
};

export default interface ITokenProvider {
  sign(secret: string, options: ISignOptions): string;
  verify(token: string, secret: string): ITokenPayload;
}