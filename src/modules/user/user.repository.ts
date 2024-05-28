import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async save(user: User): Promise<void> {
    await this.prisma.user.create({
      data: user,
    });
  }

  async findOne(userId: User['id']): Promise<User | null> {
    const selected = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!selected) return null;
    const { id, ...rest } = selected;
    return new User(rest, id);
  }
}
