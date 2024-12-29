"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSongDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_song_dto_1 = require("./create-song.dto");
class UpdateSongDto extends (0, mapped_types_1.PartialType)(create_song_dto_1.CreateSongDto) {
}
exports.UpdateSongDto = UpdateSongDto;
//# sourceMappingURL=update-song.dto.js.map