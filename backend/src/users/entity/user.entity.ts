import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { hash } from 'bcrypt';
import { AbstractEntity } from 'src/common/abstract.entity';
import { UserSaveEntity } from './save.entity';

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

  @OneToMany(() => UserSaveEntity, (save) => save.user)
  saves: UserSaveEntity[];

  @BeforeInsert() async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
