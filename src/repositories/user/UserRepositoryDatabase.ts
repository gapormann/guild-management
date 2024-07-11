import { Database } from '../../config/database';
import { User } from '../../models/User';
import { EmailAddress } from '../../object-values/EmailAddress';
import { UserRepository } from './UserRepository';

export class UserRepositoryDatabase implements UserRepository {
  constructor(private readonly db: Database) {}

  async save(user: User): Promise<void> {
    await this.db.query(`
      INSERT INTO users (id, email, password) VALUES ($1, $2, $3)
    `, [user.id, user.email.getValue(), user.getPassword()])
  }

  async findOne(id: string): Promise<User> {
    const userData = await this.db.query(`
      SELECT * FROM users WHERE id = $1
    `)
    return new User(
      userData.id,
      new EmailAddress(userData.email),
      userData.password
    )
  }
}
