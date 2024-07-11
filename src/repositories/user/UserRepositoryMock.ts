import { User } from '../../models/User';
import { UserRepository } from './UserRepository';

export class UserRepositoryMock implements UserRepository {
  public users: User[] = []

  public async save(user: User): Promise<void> {
    this.users.push(user);
  }

  public async findOne(id: string): Promise<User> {
    return this.users.find(user => user.id === id)
  }
}