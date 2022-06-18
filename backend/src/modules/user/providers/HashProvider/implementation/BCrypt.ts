import bcrypt from 'bcrypt';
import IHashProvider from '../IHashProvider';

class Bcrypt implements IHashProvider {
  async hash (data: string): Promise<string> {
    return await bcrypt.hash(data, 8);
  }

  async compare(data: string, encrypted: string): Promise<boolean> {
    return await bcrypt.compare(data, encrypted);
  }
}

export default Bcrypt;