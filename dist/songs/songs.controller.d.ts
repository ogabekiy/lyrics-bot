import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
export declare class SongsController {
    private readonly songsService;
    constructor(songsService: SongsService);
    create(createSongDto: CreateSongDto): Promise<import("./song.model").Song>;
    findAll(): Promise<import("./song.model").Song[]>;
    findOne(id: string): Promise<import("./song.model").Song>;
    update(id: string, updateSongDto: UpdateSongDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
