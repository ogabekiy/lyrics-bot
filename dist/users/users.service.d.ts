import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
export declare class UsersService {
    private UserModel;
    constructor(UserModel: typeof User);
    create(createUserDto: CreateUserDto): Promise<User>;
    createAdmin(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        res: [affectedCount: number];
    }>;
    remove(id: number): Promise<number>;
}
