import { OmitType } from '@nestjs/mapped-types';
import { User } from '../user.entity';

export class CreateUserDto extends OmitType(User, ['id', 'createdAt']) {}
