import { BadRequestException, ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ConfigService } from 'src/common/config/config.service';
import * as bcrypt from 'bcryptjs'
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import * as jwt from 'jsonwebtoken'
@Injectable()
export class AuthsService {
  constructor(@InjectModel(User) private userModel: typeof User,
  @Inject() private configService: ConfigService
){}
  async create(createAuthDto: CreateUserDto) {
    const data = await this.findOneByEmail(createAuthDto.email)
    if(data){
       throw new ConflictException('User with this email already exists')
    } 
    createAuthDto.password = await bcrypt.hash(createAuthDto.password,10)
    return await this.userModel.create(createAuthDto)
  }

  async login(loginAuthDto: LoginUserDto) {
    const data = await this.findOneByEmail(loginAuthDto.email)
    if(!data){
       throw new BadRequestException('User with this email dont exists')
    } 
    const checkPassword = await bcrypt.compare(loginAuthDto.password,data.password)
    if(!checkPassword){
      throw new UnauthorizedException("valid email or password")
    }
    const key = await this.configService.get('JWT_ACCESS_TOKEN')
    console.log(key);
    
    const token = await jwt.sign({email: loginAuthDto.email},key,{expiresIn: '1h'})

    return {token}

  }

  findAll() {
    return `This action returns all auths`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  async findOneByEmail(email:string){
    return await this.userModel.findOne({where:{email:email}})
  }
}
