import { Global, Module } from "@nestjs/common";
import { ConfigService } from "./config/config.service";
import { UsersModule } from "src/users/users.module";
import { AuthGuard } from "./guards/authGuard";
import { AuthsModule } from "src/auths/auths.module";

@Global()
@Module({
    imports: [UsersModule],
    providers: [ConfigService,AuthGuard],
    exports: [ConfigService]
})

export class SharedModule{}