"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("./config/config.service");
const users_module_1 = require("../users/users.module");
const authGuard_1 = require("./guards/authGuard");
const songs_module_1 = require("../songs/songs.module");
let SharedModule = class SharedModule {
};
exports.SharedModule = SharedModule;
exports.SharedModule = SharedModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, songs_module_1.SongsModule],
        providers: [config_service_1.ConfigService, authGuard_1.AuthGuard],
        exports: [config_service_1.ConfigService]
    })
], SharedModule);
//# sourceMappingURL=shared.module.js.map