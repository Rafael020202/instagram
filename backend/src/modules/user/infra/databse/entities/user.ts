
class User {
  id: string;
  name: string;
  email: string;
  nickname: string;
  description: string;
  pic?: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  constructor(data: any) {
    Object.assign(this, data);
  }
}

export default User;