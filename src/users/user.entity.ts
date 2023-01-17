import { ApiProperty } from '@nestjs/swagger';
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('users')
export class User {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @PrimaryGeneratedColumn()
    id: number;
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый ящик'})
    @Column()
    email: string;
    @ApiProperty({example: '12345', description: 'Пароль'})
    @Column()
    password: string;
    @ApiProperty({example: 'Firstname', description: 'Имя'})
    @Column({default: null})
    firstName: string;
    @ApiProperty({example: 'Lastname', description: 'Фамилия'})
    @Column({default: null})
    lastName?: string;
    @ApiProperty({example: 'true', description: 'Статус пользователя'})
    @Column({default: true})
    isActive: boolean;
    @ApiProperty({example: '2023-01-17 01:57:35.265383+03', description: 'Дата создания'})
    @CreateDateColumn({type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP(6)'})
    createdAt: Date;
    @ApiProperty({example: '2023-01-17 01:57:35.265383+03', description: 'Дата обновления'})
    @UpdateDateColumn({type: 'timestamp with time zone', default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    updatedAt: Date;
}