import { User } from '../../models/User';
import { EmailAddress } from '../../object-values/EmailAddress';
import { UserRepository } from '../../repositories/user/UserRepository';

export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(data: Input): Promise<Output> {
    const user = User.create(new EmailAddress(data.email), data.password)
    await this.userRepository.save(user)
    return {
      id: user.id,
      email: user.email.getValue(),
      password: user.getPassword(),
    }
  }
}

type Input = {
  email: string;
  password: string;
}

type Output = {
  id: string;
  email: string;
  password: string;
}