import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./user.model").User>;
    createAdmin(createUserDto: CreateUserDto): Promise<import("./user.model").User>;
    findAll(): Promise<import("./user.model").User[]>;
    findOne(id: string): Promise<import("./user.model").User>;
    update(id: string, updateUserDto: UpdateUserDto, req: any): Promise<{
        res: [affectedCount: number];
    }>;
    remove(id: string): Promise<number>;
}
