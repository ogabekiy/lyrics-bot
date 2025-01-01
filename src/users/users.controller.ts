import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RoleGuard } from 'src/common/guards/roleGuard';
import { Roles } from 'src/common/guards/roles.decorator';
import { AuthGuard } from 'src/common/guards/authGuard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    // console.log('xa');
    // console.log(req.user);
    // console.log(createUserDto.role);
    
    if(createUserDto.role === 'admin'){
      throw new ForbiddenException('admin is only created by super admin')
    }
    return this.usersService.create(createUserDto);
  }

  @UseGuards(RoleGuard)
  @Roles('admin')
  @Post('createAdmin')
  createAdmin(@Body() createUserDto: CreateUserDto){
    return this.usersService.createAdmin(createUserDto)
  }


  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }


  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto,@Req() req) {
    console.log("req.user.dataValues.role",req.user.dataValues.role);
    console.log("id",id);
    console.log("req.user.dataValues.id",req.user.dataValues.id);
    
    const isAdmin = req.user && req.user.dataValues.role === 'admin';
    const isUser = req.user && req.user.dataValues.role === 'user';
    const isSameUser = id == req.user.dataValues.id;
    
    if (!isAdmin && isUser && !isSameUser) {  
      throw new ForbiddenException("You can't edit others' profile");  
  }  


    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(RoleGuard)
  @Roles('admin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
