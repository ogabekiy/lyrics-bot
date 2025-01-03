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
exports.Artist = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const album_model_1 = require("../albums/album.model");
const song_model_1 = require("../songs/song.model");
let Artist = class Artist extends sequelize_typescript_1.Model {
};
exports.Artist = Artist;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], Artist.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        defaultValue: 'https://openclipart.org/image/800px/247320'
    }),
    __metadata("design:type", String)
], Artist.prototype, "artist_photo", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => album_model_1.Album),
    __metadata("design:type", Array)
], Artist.prototype, "albums", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => song_model_1.Song),
    __metadata("design:type", Array)
], Artist.prototype, "songs", void 0);
exports.Artist = Artist = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'artist' })
], Artist);
//# sourceMappingURL=artist.model.js.map