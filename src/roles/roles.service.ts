import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.entity';

@Injectable()
export class RolesService {
    constructor(@InjectRepository(Role) private repositoryRole: Repository<Role>) {}
    async createRole(dto: CreateRoleDto) {
        return this.repositoryRole.save(dto);
    }
    async getRoleByValue(value: string) {
        return this.repositoryRole.findOne({ where: { value } });
    }
}
