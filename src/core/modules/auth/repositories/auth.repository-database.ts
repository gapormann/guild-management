import { Database } from '../../../config/database';
import { EmailAddress } from '../../../object-values/EmailAddress';
import { User } from '../../user/user.entity';
import { AuthRepository } from './auth.repository';

export class AuthRepositoryDatabase implements AuthRepository {
  constructor(private readonly db: Database) {}
  async getUserCredentials(email: string): Promise<User> {
    const userData = await this.db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    )
    return new User(
      userData.id,
      new EmailAddress(userData.email),
      userData.password
    )
  }
}