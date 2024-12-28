import { BadRequestException, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { ConfigService } from "../config/config.service";
import { UsersService } from "src/users/users.service";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UsersService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new BadRequestException('Invalid Authorization header format');
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new BadRequestException('Token not provided');
        }

        const secret = this.configService.get('JWT_ACCESS_TOKEN');
        if (!secret) {
            throw new BadRequestException('JWT access token secret is not configured');
        }
        try {
            const decoded = jwt.verify(token, secret);
            const user = await this.userService.findUserByEmail(decoded.email);

            if (!user) {
                throw new BadRequestException('User not found');
            }
            request.user = user;
            return true;
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new BadRequestException('Token has expired');
            }
            if (error.name === 'JsonWebTokenError') {
                throw new BadRequestException('Invalid token');
            }
            throw new BadRequestException('Authentication failed');
        }
    }
}
