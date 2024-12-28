"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = void 0;
const common_1 = require("@nestjs/common");
const authGuard_1 = require("./authGuard");
const core_1 = require("@nestjs/core");
const config_service_1 = require("../config/config.service");
const users_service_1 = require("../../users/users.service");
let RoleGuard = class RoleGuard extends authGuard_1.AuthGuard {
    constructor(reflector, configService, userService) {
        super(configService, userService);
        this.reflector = reflector;
    }
    async canActivate(context) {
        const isAuth = await super.canActivate(context);
        if (!isAuth)
            return false;
        const requiredRoles = this.reflector.get('roles', context.getHandler());
        if (!requiredRoles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!requiredRoles.includes(user.role)) {
            throw new common_1.ForbiddenException('You do not have the required role to access this resource');
        }
        return true;
    }
};
exports.RoleGuard = RoleGuard;
exports.RoleGuard = RoleGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        config_service_1.ConfigService,
        users_service_1.UsersService])
], RoleGuard);
//# sourceMappingURL=roleGuard.js.map