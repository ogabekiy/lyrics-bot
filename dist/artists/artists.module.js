"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistsModule = void 0;
const common_1 = require("@nestjs/common");
const artists_service_1 = require("./artists.service");
const artists_controller_1 = require("./artists.controller");
const sequelize_1 = require("@nestjs/sequelize");
const artist_model_1 = require("./artist.model");
const users_module_1 = require("../users/users.module");
let ArtistsModule = class ArtistsModule {
};
exports.ArtistsModule = ArtistsModule;
exports.ArtistsModule = ArtistsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([artist_model_1.Artist]), users_module_1.UsersModule],
        controllers: [artists_controller_1.ArtistsController],
        providers: [artists_service_1.ArtistsService],
    })
], ArtistsModule);
//# sourceMappingURL=artists.module.js.map