"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const sequelize_1 = require("@nestjs/sequelize");
const auths_module_1 = require("./auths/auths.module");
const shared_module_1 = require("./common/shared.module");
const artists_module_1 = require("./artists/artists.module");
const albums_module_1 = require("./albums/albums.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule,
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                database: 'lyricss',
                username: 'postgres',
                password: '123456',
                host: '127.0.0.1',
                port: 5432,
                autoLoadModels: true,
                synchronize: true,
            }),
            auths_module_1.AuthsModule, shared_module_1.SharedModule, artists_module_1.ArtistsModule, albums_module_1.AlbumsModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map