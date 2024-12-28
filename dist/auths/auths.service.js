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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("../users/user.model");
const config_service_1 = require("../common/config/config.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let AuthsService = class AuthsService {
    constructor(userModel, configService) {
        this.userModel = userModel;
        this.configService = configService;
    }
    async create(createAuthDto) {
        const data = await this.findOneByEmail(createAuthDto.email);
        if (data) {
            throw new common_1.ConflictException('User with this email already exists');
        }
        createAuthDto.password = await bcrypt.hash(createAuthDto.password, 10);
        return await this.userModel.create(createAuthDto);
    }
    async login(loginAuthDto) {
        const data = await this.findOneByEmail(loginAuthDto.email);
        if (!data) {
            throw new common_1.BadRequestException('User with this email dont exists');
        }
        const checkPassword = await bcrypt.compare(loginAuthDto.password, data.password);
        if (!checkPassword) {
            throw new common_1.UnauthorizedException("valid email or password");
        }
        const key = await this.configService.get('JWT_ACCESS_TOKEN');
        console.log(key);
        const token = await jwt.sign({ email: loginAuthDto.email }, key, { expiresIn: '1h' });
        return { token };
    }
    findAll() {
        return `This action returns all auths`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    async findOneByEmail(email) {
        return await this.userModel.findOne({ where: { email: email } });
    }
};
exports.AuthsService = AuthsService;
exports.AuthsService = AuthsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __param(1, (0, common_1.Inject)()),
    __metadata("design:paramtypes", [Object, config_service_1.ConfigService])
], AuthsService);
//# sourceMappingURL=auths.service.js.map