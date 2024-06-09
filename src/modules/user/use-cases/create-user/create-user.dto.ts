import {
  IsEmail,
  MinLength,
  IsStrongPassword,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @MinLength(3)
  public name: string;
  @IsEmail()
  public email: string;
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
}
