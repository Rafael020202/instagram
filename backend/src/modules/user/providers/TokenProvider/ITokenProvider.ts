export interface ISignOptions {
  subject: any;
  expiresIn: string;
};

export interface ITokenProvider {
  sign(secret: string, options: ISignOptions): string;
}