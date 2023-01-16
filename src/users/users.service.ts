import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User> ) {

    }

    async getAllUsers(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async getUser(id: number): Promise<User> {
        return this.usersRepository.findOneBy({id})
    }


    async createUser(dto: CreateUserDto): Promise<User> {
        return this.usersRepository.create(dto)
    }

    async removeUser(id: number): Promise<void> {
        await this.usersRepository.delete(id)
    }

    
}
