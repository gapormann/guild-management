import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }
  // @Get(':userId')
  // async findOne(@Param('userId') userId: string) {
  //   return this.userService.findOne(userId);
  // }
}
