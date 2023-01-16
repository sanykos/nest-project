import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {

    }

    @Post()
    create(@Body() userDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(userDto);
    }

    @Get()
    getAll(): Promise<User[]> {
        return this.userService.getAllUsers();
    }
}
