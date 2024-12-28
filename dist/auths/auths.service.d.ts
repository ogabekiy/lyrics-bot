import { User } from 'src/users/user.model';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ConfigService } from 'src/common/config/config.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
export declare class AuthsService {
    private userModel;
    private configService;
    constructor(userModel: typeof User, configService: ConfigService);
    create(createAuthDto: CreateUserDto): Promise<User>;
    login(loginAuthDto: LoginUserDto): Promise<{
        token: any;
    }>;
    findAll(): string;
    findOne(id: number): string;
    findOneByEmail(email: string): Promise<User>;
}
