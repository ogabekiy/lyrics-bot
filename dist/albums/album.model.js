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
exports.Album = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const artist_model_1 = require("../artists/artist.model");
const song_model_1 = require("../songs/song.model");
let Album = class Album extends sequelize_typescript_1.Model {
};
exports.Album = Album;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], Album.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => artist_model_1.Artist),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Album.prototype, "artist_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], Album.prototype, "album_cover", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Album.prototype, "song_quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => artist_model_1.Artist),
    __metadata("design:type", artist_model_1.Artist)
], Album.prototype, "artist", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => song_model_1.Song),
    __metadata("design:type", Array)
], Album.prototype, "songs", void 0);
exports.Album = Album = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'albums' })
], Album);
//# sourceMappingURL=album.model.js.map