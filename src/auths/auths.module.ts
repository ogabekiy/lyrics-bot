import { Module } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { AuthsController } from './auths.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { ConfigService } from 'src/common/config/config.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [AuthsController],
  providers: [AuthsService,ConfigService],
})
export class AuthsModule {}
