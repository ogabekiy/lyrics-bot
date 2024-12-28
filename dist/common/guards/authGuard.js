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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const config_service_1 = require("../config/config.service");
const users_service_1 = require("../../users/users.service");
const jwt = require("jsonwebtoken");
let AuthGuard = class AuthGuard {
    constructor(configService, userService) {
        this.configService = configService;
        this.userService = userService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new common_1.BadRequestException('Invalid Authorization header format');
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new common_1.BadRequestException('Token not provided');
        }
        const secret = this.configService.get('JWT_ACCESS_TOKEN');
        if (!secret) {
            throw new common_1.BadRequestException('JWT access token secret is not configured');
        }
        try {
            const decoded = jwt.verify(token, secret);
            const user = await this.userService.findUserByEmail(decoded.email);
            if (!user) {
                throw new common_1.BadRequestException('User not found');
            }
            request.user = user;
            return true;
        }
        catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new common_1.BadRequestException('Token has expired');
            }
            if (error.name === 'JsonWebTokenError') {
                throw new common_1.BadRequestException('Invalid token');
            }
            throw new common_1.BadRequestException('Authentication failed');
        }
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_service_1.ConfigService,
        users_service_1.UsersService])
], AuthGuard);
//# sourceMappingURL=authGuard.js.map