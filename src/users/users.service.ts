import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesService } from 'src/roles/roles.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        private rolesService: RolesService
    ) {}

    async getAllUsers(): Promise<User[]> {
        return this.usersRepository.find({ relations: { roles: true } });
    }

    async getUser(id: number): Promise<User> {
        return this.usersRepository.findOneBy({ id });
    }

    async createUser(dto: CreateUserDto): Promise<User> {
        const user = new User();
        const role = await this.rolesService.getRoleByValue('USER');
        user.email = dto.email;
        user.password = dto.password;
        user.roles = [role];
        return this.usersRepository.save(user);
    }

    async removeUser(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
