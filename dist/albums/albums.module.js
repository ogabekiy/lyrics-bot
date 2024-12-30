"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumsModule = void 0;
const common_1 = require("@nestjs/common");
const albums_service_1 = require("./albums.service");
const albums_controller_1 = require("./albums.controller");
const sequelize_1 = require("@nestjs/sequelize");
const album_model_1 = require("./album.model");
const artist_model_1 = require("../artists/artist.model");
let AlbumsModule = class AlbumsModule {
};
exports.AlbumsModule = AlbumsModule;
exports.AlbumsModule = AlbumsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([album_model_1.Album, artist_model_1.Artist])],
        controllers: [albums_controller_1.AlbumsController],
        providers: [albums_service_1.AlbumsService],
    })
], AlbumsModule);
//# sourceMappingURL=albums.module.js.map