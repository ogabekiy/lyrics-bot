import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthsModule } from './auths/auths.module';
import { SharedModule } from './common/shared.module';
import { ArtistsModule } from './artists/artists.module';
import { AlbumsModule } from './albums/albums.module';
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
    }),
    AuthsModule,SharedModule, ArtistsModule, AlbumsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
