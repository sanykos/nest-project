import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column({default: true})
    isActive: boolean;
}