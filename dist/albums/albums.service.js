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
exports.AlbumsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const album_model_1 = require("./album.model");
const artist_model_1 = require("../artists/artist.model");
let AlbumsService = class AlbumsService {
    constructor(AlbumModel, ArtistModel) {
        this.AlbumModel = AlbumModel;
        this.ArtistModel = ArtistModel;
    }
    async create(createAlbumDto) {
        const artist = await this.ArtistModel.findOne({ where: { id: createAlbumDto.artist_id } });
        if (!artist) {
            throw new common_1.NotFoundException('Artist not found');
        }
        return await this.AlbumModel.create(createAlbumDto);
    }
    async findAll() {
        return await this.AlbumModel.findAll();
    }
    async findOne(id) {
        return await this.AlbumModel.findOne({ where: { id } });
    }
    async update(id, updateAlbumDto) {
        const data = await this.findOne(id);
        if (!data) {
            throw new common_1.NotFoundException('Album not found (');
        }
        return await this.AlbumModel.update(updateAlbumDto, { where: { id } });
    }
    async remove(id) {
        const data = await this.findOne(id);
        if (!data) {
            throw new common_1.NotFoundException('Album not found (');
        }
        return this.AlbumModel.destroy({ where: { id } });
    }
};
exports.AlbumsService = AlbumsService;
exports.AlbumsService = AlbumsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(album_model_1.Album)),
    __param(1, (0, sequelize_1.InjectModel)(artist_model_1.Artist)),
    __metadata("design:paramtypes", [Object, Object])
], AlbumsService);
//# sourceMappingURL=albums.service.js.map