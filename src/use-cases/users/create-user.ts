import { User } from '../../models/User';
import { EmailAddress } from '../../object-values/EmailAddress';
import { UserRepositoryDatabase } from '../../repositories/user/UserRepositoryDatabase';

export class CreateUser {
  constructor(private readonly userRepository: UserRepositoryDatabase) {}
  async execute(email: string, password: string): Promise<User> {
    const user = User.create(new EmailAddress(email), password)
    await this.userRepository.save(user)
    return user
  }
}