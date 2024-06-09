import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUser } from './use-cases/create-user/create-user';

@Injectable()
export class UserService {
  constructor(private readonly createUser: CreateUser) {}
  async create(dto: CreateUserDto): Promise<{ userId: string }> {
    return this.createUser.execute(dto);
  }
  // async findOne(id: string): Promise<User> {
  //   const user = await this.userRepository.findOne(id);
  //   if (!user) throw new NotFoundException('User not found.');
  //   return user;
  // }
}
