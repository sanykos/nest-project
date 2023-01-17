import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/roles/roles.entity';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [TypeOrmModule.forFeature([User, Role])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
