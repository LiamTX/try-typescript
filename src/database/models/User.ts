import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert, BeforeUpdate } from 'typeorm';
import { encrypt } from '../../api/middlewares/encrypter';

@Entity('users')
class User extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column()
    name: string
    @Column()
    email: string
    @Column()
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = encrypt(this.password);
    }
}

export default User;