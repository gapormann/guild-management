import { EmailAddress } from '../../../object-values/EmailAddress';
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../user.entity';

export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(input: Input): Promise<Output> {
    const user = User.create(new EmailAddress(input.email), input.password)
    await this.userRepository.save(user)
    return {
      user: {
        id: user.id,
        email: user.email.getValue(),
      }
    }
  }
}

type Input = {
  email: string;
  password: string;
}

type Output = {
  user: {
    id: string;
    email: string;
  }
}