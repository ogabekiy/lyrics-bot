import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
export declare class SongsController {
    private readonly songsService;
    constructor(songsService: SongsService);
    create(createSongDto: CreateSongDto): Promise<import("./song.model").Song>;
    findAll(): Promise<string>;
    findOne(id: string): string;
    update(id: string, updateSongDto: UpdateSongDto): string;
    remove(id: string): string;
}
