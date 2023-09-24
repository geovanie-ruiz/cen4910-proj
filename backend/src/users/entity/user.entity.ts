import { BeforeInsert, Column, Entity } from 'typeorm';
import { hash } from 'bcrypt';
import { AbstractEntity } from 'src/common/abstract.entity';

@Entity('user')
export class UserEntity extends AbstractEntity {
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  email: string;

  @BeforeInsert() async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
