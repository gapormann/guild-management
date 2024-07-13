import { UserRepository } from '../repositories/UserRepository';

export class GetUser {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(userId: string): Promise<GetUserOutput> {
    const user = await this.userRepository.findOne(userId)
    return {
      user: {
        id: user.id,
        email: user.email.getValue()
      }
    }
  }
}

export type GetUserOutput = {
  user: {
    id: string;
    email: string;
  } | null
}