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
exports.Song = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const album_model_1 = require("../albums/album.model");
const artist_model_1 = require("../artists/artist.model");
const user_model_1 = require("../users/user.model");
let Song = class Song extends sequelize_typescript_1.Model {
};
exports.Song = Song;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], Song.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false
    }),
    __metadata("design:type", String)
], Song.prototype, "lyrics", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        defaultValue: 'https://cphlibrary.libnet.info/images/events/cphlibrary/spotify.png'
    }),
    __metadata("design:type", String)
], Song.prototype, "song_cover", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => artist_model_1.Artist),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Song.prototype, "artist_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => artist_model_1.Artist),
    __metadata("design:type", artist_model_1.Artist)
], Song.prototype, "artist", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => album_model_1.Album),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true
    }),
    __metadata("design:type", Number)
], Song.prototype, "album_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => album_model_1.Album),
    __metadata("design:type", album_model_1.Album)
], Song.prototype, "album", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_model_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    }),
    __metadata("design:type", Number)
], Song.prototype, "added_by", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Song.prototype, "user", void 0);
exports.Song = Song = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'songs' })
], Song);
//# sourceMappingURL=song.model.js.map