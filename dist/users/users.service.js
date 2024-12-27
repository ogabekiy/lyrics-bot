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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./user.model");
const bcrypt = require("bcryptjs");
let UsersService = class UsersService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async create(createUserDto) {
        console.log('xa');
        const data = await this.findUserByEmail(createUserDto.email);
        if (data) {
            throw new common_1.ConflictException("Email already exists");
        }
        createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
        return await this.UserModel.create(createUserDto);
    }
    async findAll() {
        return await this.UserModel.findAll();
        ;
    }
    async findOne(id) {
        const data = await this.UserModel.findOne({ where: { id: id } });
        return data;
    }
    async findUserByEmail(email) {
        const data = await this.UserModel.findOne({ where: { email: email } });
        return data;
    }
    async update(id, updateUserDto) {
        const data = await this.findOne(id);
        if (!data) {
            throw new common_1.NotFoundException("User not found");
        }
        const res = await this.UserModel.update(updateUserDto, { where: { id: id } });
        return { res };
    }
    async remove(id) {
        const data = await this.findOne(id);
        if (!data) {
            throw new common_1.NotFoundException('User with this ID doesnt exist');
        }
        return this.UserModel.destroy({ where: { id: id } });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UsersService);
//# sourceMappingURL=users.service.js.map