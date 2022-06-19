interface CreateUserDto {
  id: string;
  name: string;
  nickname: string;
  description: string;
  pic?: string;
  password: string;
  email: string;
}

export default CreateUserDto;