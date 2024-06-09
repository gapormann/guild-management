import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../user.entity';
import { UserRepository } from '../../user.repository';

export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(input: CreateUserDto) {
    const user = User.create(
      input.email,
      input.name,
      input.password,
      input.phone,
      input.photo,
    );
    await this.userRepository.save(user);
    return { userId: user.id };
  }
}
