import { User } from '@prisma/client';
import { UserRepository } from '../../user.repository';

export class GetUser {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(userId: User['id'], includePassword: boolean): Promise<Output> {
    const user = await this.userRepository.findById(userId);
    const output: Output = {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      name: user.name,
      phone: user.phone,
      photo: user.photo,
    };
    if (includePassword) output.password = user.password;
    return output;
  }
}

type Output = {
  id: string;
  email: string;
  name: string;
  password?: string;
  createdAt: Date;
  phone?: string;
  photo?: string;
};
