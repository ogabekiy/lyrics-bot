import { AuthsService } from './auths.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
export declare class AuthsController {
    private readonly authsService;
    constructor(authsService: AuthsService);
    create(createAuthDto: CreateUserDto): Promise<import("../users/user.model").User>;
    login(logAuthDto: LoginUserDto): Promise<{
        token: any;
    }>;
    findAll(): string;
    findOne(id: string): string;
}
