import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({ unique: true })
  email: string;

  @MinLength(4)
  password: string;
}
