import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { User } from './users/users.entity'; 
import { Todo } from './todos/todos.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'admindb',
      entities: [User, Todo],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    TodosModule,
  ],
})
export class AppModule {}