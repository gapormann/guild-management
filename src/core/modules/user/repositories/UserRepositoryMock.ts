import { EmailAddress } from '../../../object-values/EmailAddress';
import { User } from '../user.entity';
import { UserRepository } from './UserRepository';

export class UserRepositoryMock implements UserRepository {
  public users: User[] = [
    User.create(new EmailAddress('gabriel@ialui.com.br'), 'teste123'),
    User.create(new EmailAddress('aline@ialui.com.br'), 'teste123')
  ]

  public async save(user: User): Promise<void> {
    this.users.push(user);
  }

  public async findOne(id: string): Promise<User> {
    return this.users.find(user => user.id === id)
  }
}