import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  userId: number;


  @Column()
  urole: string;
}
