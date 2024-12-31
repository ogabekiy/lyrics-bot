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
exports.ArtistsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const artist_model_1 = require("./artist.model");
const album_model_1 = require("../albums/album.model");
let ArtistsService = class ArtistsService {
    constructor(ArtistModel) {
        this.ArtistModel = ArtistModel;
    }
    async create(createArtistDto) {
        return await this.ArtistModel.create(createArtistDto);
    }
    async findAll() {
        return await this.ArtistModel.findAll();
    }
    async findOne(id) {
        return await this.ArtistModel.findOne({ where: { id }, include: [{ model: album_model_1.Album, attributes: ['title'] }, { model: album_model_1.Album, attributes: ['title'] }] });
    }
    async update(id, updateArtistDto) {
        const data = await this.findOne(id);
        console.log('artist', data);
        if (!data) {
            throw new common_1.NotFoundException('Artist not found ');
        }
        return await this.ArtistModel.update(updateArtistDto, { where: { id: id } });
    }
    async remove(id) {
        const data = await this.findOne(id);
        if (!data) {
            throw new common_1.NotFoundException('Artist not found ');
        }
        return await this.ArtistModel.destroy({ where: { id: id } });
    }
};
exports.ArtistsService = ArtistsService;
exports.ArtistsService = ArtistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(artist_model_1.Artist)),
    __metadata("design:paramtypes", [Object])
], ArtistsService);
//# sourceMappingURL=artists.service.js.map