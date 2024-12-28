"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArtistDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_artist_dto_1 = require("./create-artist.dto");
class UpdateArtistDto extends (0, mapped_types_1.PartialType)(create_artist_dto_1.CreateArtistDto) {
}
exports.UpdateArtistDto = UpdateArtistDto;
//# sourceMappingURL=update-artist.dto.js.map