import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'entities/user.entity';
import { SessionsService } from 'sessions/sessions.service';

@Injectable()
export class AuthService {
  constructor(
    private sessionsService: SessionsService,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userEmail: string, userPassword: string): Promise<any> {
    try {
      const user = await this.usersService.findByEmail(userEmail);
      if (user && (await bcrypt.compare(userPassword, user.password))) {
        const { id, email, isAdmin } = user;
        return { id, email, isAdmin };
      } else {
        return null;
      }
    } catch (err) {
      Logger.log(`User ${userEmail} was not found`);
      return null;
    }
  }

  async validateJwtUser(jwt: string): Promise<User> {
    try {
      const session = await this.sessionsService.findOneOrFail(
        { jwt },
        { select: ['jwt', 'userId'] },
      );

      this.jwtService.verify(jwt, { ignoreExpiration: false });

      const user = await this.usersService.findOne(session.userId, {
        select: ['id', 'email', 'isAdmin'],
      });

      return user;
    } catch (err) {
      Logger.log(err);
      return null;
    }
  }

  async login(user: User, ip: string, userAgent: string) {
    const payload = { email: user.email, sub: user.id };
    const jwt = this.jwtService.sign(payload);

    try {
      await this.sessionsService.save({ jwt, user, ip, userAgent });
    } catch (err) {
      Logger.error(err);
      throw new UnauthorizedException();
    }
    return { accessToken: jwt, user };
  }

  async logout(jwt: string) {
    return this.sessionsService.delete({ jwt });
  }
}
