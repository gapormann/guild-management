import { ulid } from 'ulid';
import * as bcrypt from 'bcrypt';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class User {
  constructor(props: Omit<User, 'id'>, id?: string) {
    if (!id) {
      const sault = bcrypt.genSaltSync();
      props.password = bcrypt.hashSync(props.password, sault);
      this.id = id ? id : ulid();
      this.createdAt = new Date();
    } else {
      this.id = id;
    }
    Object.assign(this, props);
  }

  public readonly id: string;
  @IsEmail()
  public email: string;
  @MinLength(3)
  public name: string;
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  public password: string;
  @IsOptional()
  @IsString()
  @MinLength(11)
  @MaxLength(16)
  public phone?: string;
  @IsOptional()
  @IsString()
  public photo?: string;
  public createdAt?: Date;
}
