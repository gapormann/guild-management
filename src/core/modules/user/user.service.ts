import { UserRepository } from './repositories/UserRepository';
import { CreateUser } from './use-cases/create-user';
import { GetUser } from './use-cases/get-user';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async createUser(dto: {email: string; password: string}) {
    return new CreateUser(this.userRepository).execute(dto)
  }
  async getUser(userId: string) {
    return new GetUser(this.userRepository).execute(userId)
  }
}