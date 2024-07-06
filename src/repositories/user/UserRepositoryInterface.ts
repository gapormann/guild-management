import { User } from '../../models/User'

export interface UserRepositoryInterface {
  save(user: User): Promise<void>
  findOne(id: string): Promise<User>
}