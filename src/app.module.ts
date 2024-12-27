import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [UsersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      database: 'lyricss',
      username: 'postgres',
      password: '123456',
      host: '127.0.0.1',
      port: 5432,
      autoLoadModels: true,
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
