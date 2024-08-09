import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UsersService } from '../users/users.service';
import { User } from 'src/users/users.entity'; 

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_jwt_secret', // Must match the secret used in AuthModule
    });
  }

  async validate(payload: any): Promise<User> {
    return this.usersService.findOneById(payload.sub);
  }
}









// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// // import { JwtStrategy as PassportJwtStrategy, ExtractJwt } from 'passport-jwt';
// import { JwtStrategy as PassportJwtStrategy, ExtractJwt } from 'passport-jwt';
// import { UsersService } from '../users/users.service';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(PassportJwtStrategy) {
//   constructor(private readonly usersService: UsersService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: 'your_jwt_secret', // Must match the secret used in AuthModule
//     });
//   }

//   async validate(payload: any) {
//     return this.usersService.findOneById(payload.sub);
//   }
// }