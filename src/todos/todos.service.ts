import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todos.entity'; 
import { todo } from 'node:test';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  create(userId: number, text: string, urole: string): Promise<Todo> {
    const todo = this.todoRepository.create({ userId, text, urole });
    return this.todoRepository.save(todo);
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async remove(id: number, userId: number): Promise<void> {
    await this.todoRepository.delete({ id, userId });
  }
}