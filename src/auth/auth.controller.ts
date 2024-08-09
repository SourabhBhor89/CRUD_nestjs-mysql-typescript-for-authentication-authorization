import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/androiddev')
  async alogin(@Body() loginDto: { username: string; password: string; role:string }) {
    const user = await this.authService.validateUser(loginDto.username, loginDto.password, loginDto.role);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.alogin(user);
  }


  @Post('login/webdev')
  async wlogin(@Body() loginDto: { username: string; password: string; role:string }) {
    const user = await this.authService.validateUser(loginDto.username, loginDto.password, loginDto.role);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.wlogin(user);
  }
}