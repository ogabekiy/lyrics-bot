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
exports.SongsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const song_model_1 = require("./song.model");
const artist_model_1 = require("../artists/artist.model");
let SongsService = class SongsService {
    constructor(SongModel) {
        this.SongModel = SongModel;
    }
    async create(createSongDto) {
        return await this.SongModel.create(createSongDto);
    }
    async findAll() {
        const data = await this.SongModel.findAll({
            include: [
                { model: artist_model_1.Artist }
            ]
        });
        return `This action returns all songs`;
    }
    async findOne(id) {
        return await this.SongModel.findOne({ where: { id } });
    }
    async update(id, updateSongDto) {
        const data = await this.findOne(id);
        if (!data) {
            throw new common_1.NotFoundException('Song not found');
        }
        return await this.SongModel.update(updateSongDto, { where: { id } });
    }
    async remove(id) {
        const data = await this.findOne(id);
        if (!data) {
            throw new common_1.NotFoundException('Song not found');
        }
        return await this.SongModel.destroy({ where: { id } });
    }
};
exports.SongsService = SongsService;
exports.SongsService = SongsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(song_model_1.Song)),
    __metadata("design:paramtypes", [Object])
], SongsService);
//# sourceMappingURL=songs.service.js.map