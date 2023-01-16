import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column({default: null})
    firstName: string;
    @Column({default: null})
    lastName?: string;
    @Column({default: true})
    isActive: boolean;
    @CreateDateColumn({type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP(6)'})
    createdAt: Date;
    @UpdateDateColumn({type: 'timestamp with time zone', default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)"})
    updatedAt: Date;
}