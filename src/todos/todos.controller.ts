import { Controller, Post, Get, Delete, Param, Body, UseGuards, Req } from '@nestjs/common';
import { TodosService } from './todos.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; 
import { AuthService } from '../auth/auth.service';
import { User } from 'src/users/users.entity';
import { JwtPayload } from 'jsonwebtoken';
import { RoleGuard } from 'src/role.guard';

@Controller('todos')
@UseGuards((JwtAuthGuard), new RoleGuard("webdev"))

// if(AuthService.payload.role== "webdev"){
export class TodosController {
  // if(user_role:string=="webdev"){
  constructor(
    private readonly todosService: TodosService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async create(@Body() body: { text: string, urole: string }, @Req() req) {
    return this.todosService.create(req.user.id, body.text, body.urole );
  }

  @Get()
  async findAll(@Req() req) {
    return this.todosService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Req() req) {
    return this.todosService.remove(id, req.user.id);
  }
}