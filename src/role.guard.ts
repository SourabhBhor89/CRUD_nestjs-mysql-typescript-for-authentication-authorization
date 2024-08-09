import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from 'src/users/users.entity';

export class RoleGuard implements CanActivate {
  private rolePassed: string;
  constructor(role: string) {
    this.rolePassed = role;
  }

  canActivate(context: ExecutionContext): any {
    const ctx = context.switchToHttp();
    const request: any = ctx.getRequest<Request>();
    if (request.user.role == 'webdev') {
      return (this.rolePassed = request.user.role);
    } else {
      return null;
    }
  }
}
