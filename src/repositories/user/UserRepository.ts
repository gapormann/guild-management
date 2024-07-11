import { User } from '../../models/User'

export interface UserRepository {
  save(user: User): Promise<void>
  findOne(id: string): Promise<User>
}