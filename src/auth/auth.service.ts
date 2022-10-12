import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { MONGO_DUPLICATE_KEY_ERROR_NUMBER } from '../common/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { password, ...userData } = createUserDto;
    console.log(createUserDto);
    try {
      const user = await this.userModel.create({
        password: bcrypt.hashSync(password, 10),
        ...userData,
      });
      delete user.password;
      return user;
    } catch (err) {
      if (err.code === MONGO_DUPLICATE_KEY_ERROR_NUMBER) {
        throw new BadRequestException(
          `Cant create user. ${JSON.stringify(err.keyValue)}`,
        );
      }
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateUserDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
