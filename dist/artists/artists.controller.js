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
exports.ArtistsController = void 0;
const common_1 = require("@nestjs/common");
const artists_service_1 = require("./artists.service");
const create_artist_dto_1 = require("./dto/create-artist.dto");
const update_artist_dto_1 = require("./dto/update-artist.dto");
const roleGuard_1 = require("../common/guards/roleGuard");
const roles_decorator_1 = require("../common/guards/roles.decorator");
let ArtistsController = class ArtistsController {
    constructor(artistsService) {
        this.artistsService = artistsService;
    }
    create(createArtistDto) {
        return this.artistsService.create(createArtistDto);
    }
    findAll() {
        return this.artistsService.findAll();
    }
    findOne(id) {
        return this.artistsService.findOne(+id);
    }
    update(id, updateArtistDto) {
        return this.artistsService.update(+id, updateArtistDto);
    }
    remove(id) {
        return this.artistsService.remove(+id);
    }
};
exports.ArtistsController = ArtistsController;
__decorate([
    (0, common_1.UseGuards)(roleGuard_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artist_dto_1.CreateArtistDto]),
    __metadata("design:returntype", void 0)
], ArtistsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArtistsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtistsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(roleGuard_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_artist_dto_1.UpdateArtistDto]),
    __metadata("design:returntype", void 0)
], ArtistsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(roleGuard_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtistsController.prototype, "remove", null);
exports.ArtistsController = ArtistsController = __decorate([
    (0, common_1.Controller)('artists'),
    __metadata("design:paramtypes", [artists_service_1.ArtistsService])
], ArtistsController);
//# sourceMappingURL=artists.controller.js.map