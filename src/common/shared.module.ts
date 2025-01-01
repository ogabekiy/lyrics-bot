import { Global, Module } from "@nestjs/common";
import { ConfigService } from "./config/config.service";
import { UsersModule } from "src/users/users.module";
import { AuthGuard } from "./guards/authGuard";
import { AuthsModule } from "src/auths/auths.module";
import { SongsModule } from "src/songs/songs.module";

@Global()
@Module({
    imports: [UsersModule,SongsModule],
    providers: [ConfigService,AuthGuard],
    exports: [ConfigService]
})

export class SharedModule{}