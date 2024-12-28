import { CanActivate, ExecutionContext } from "@nestjs/common";
import { ConfigService } from "../config/config.service";
import { UsersService } from "src/users/users.service";
export declare class AuthGuard implements CanActivate {
    private readonly configService;
    private readonly userService;
    constructor(configService: ConfigService, userService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
