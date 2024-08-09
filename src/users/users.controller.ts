import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Get()
  async findAll(@Req() req:any) {
    return this.usersService.findAll();
  }



  @Post()
  async register(@Body() registerDto: { username: string; password: string; role: string }) {
    return this.usersService.create(registerDto.username, registerDto.password, registerDto.role);
  }
}