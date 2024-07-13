import { EmailAddress } from '../../../object-values/EmailAddress';
import { User } from '../../user/user.entity';

export interface AuthRepository {
  getUserCredentials(email: string): Promise<User>
}