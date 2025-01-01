import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcryptjs';
import { Song } from 'src/songs/song.model';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private UserModel: typeof User) {}

  async create(createUserDto: CreateUserDto) {
    console.log('xa');
    
    const data = await this.findUserByEmail(createUserDto.email);
    if(data){
      throw new ConflictException("Email already exists");
    }
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    return await this.UserModel.create(createUserDto);
  }
  
  async findAll() {
    return await this.UserModel.findAll({include:[{model:Song,attributes:['title']}]}); ;
  }

  async findOne(id: number) {
    const data = await this.UserModel.findOne({ where: { id:id } });
    return data;
  }
  async findUserByEmail(email: string) {
    const data = await this.UserModel.findOne({ where: { email:email } });
    return data;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const data = await this.findOne(id);
    if(!data){
      throw new NotFoundException("User not found");
    }
    // console.log('data',data);
    
    const res = await this.UserModel.update(updateUserDto, { where: { id:id } });
    // console.log('res',res);
    
    return {res}
  }
  async remove(id: number) {
    const data = await this.findOne(id)
      if(!data){
        throw new NotFoundException('User with this ID doesnt exist')
      }
    return this.UserModel.destroy({ where: { id:id } });
  }
}
