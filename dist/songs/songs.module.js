"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsModule = void 0;
const common_1 = require("@nestjs/common");
const songs_service_1 = require("./songs.service");
const songs_controller_1 = require("./songs.controller");
const sequelize_1 = require("@nestjs/sequelize");
const song_model_1 = require("./song.model");
const users_module_1 = require("../users/users.module");
let SongsModule = class SongsModule {
};
exports.SongsModule = SongsModule;
exports.SongsModule = SongsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([song_model_1.Song]), users_module_1.UsersModule],
        controllers: [songs_controller_1.SongsController],
        providers: [songs_service_1.SongsService],
    })
], SongsModule);
//# sourceMappingURL=songs.module.js.map