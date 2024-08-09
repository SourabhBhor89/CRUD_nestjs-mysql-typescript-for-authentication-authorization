import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/users.entity'; 
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string, role: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;

      return result;
      // console.log(result);
    }
    return null;
  }

  async alogin(user: User) {
    const payload = { username: user.username, sub: user.id };
    if(user.role=="androiddev"){
      
      return {
        access_token: this.jwtService.sign(payload),
      };}
      else{
        return {
          notAuthorized: null};
      }
  }

  async wlogin(user: User) {
    const payload = { username: user.username, sub: user.id , role: user.role};
    if(user.role=="webdev"){
    return {
      access_token: this.jwtService.sign(payload),
    };}
    else{
      // console.log("You are not Authorized");
      return {
        notAuthorized: null};
    }
  }

}