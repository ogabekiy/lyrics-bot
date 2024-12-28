import { CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "./authGuard";
import { Reflector } from "@nestjs/core";
import { ConfigService } from "../config/config.service";
import { UsersService } from "src/users/users.service";
export declare class RoleGuard extends AuthGuard implements CanActivate {
    private reflector;
    constructor(reflector: Reflector, configService: ConfigService, userService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
