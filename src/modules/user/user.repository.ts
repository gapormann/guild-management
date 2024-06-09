import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from './user.entity';

export interface UserRepositoryInterface {
  save(user: User): Promise<void>;
  findById(userId: User['id']): Promise<User>;
}

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async save(user: User): Promise<void> {
    await this.prisma.user.create({
      data: user,
    });
  }

  async findById(userId: User['id']): Promise<User | null> {
    const userData = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!userData) return null;
    return new User(
      userData.id,
      userData.email,
      userData.name,
      userData.password,
      userData.createdAt,
      userData.phone,
      userData.photo,
    );
  }
}
