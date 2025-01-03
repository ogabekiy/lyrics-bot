import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './song.model';
export declare class SongsService {
    private SongModel;
    constructor(SongModel: typeof Song);
    create(createSongDto: CreateSongDto): Promise<Song>;
    findAll(): Promise<Song[]>;
    findOne(id: number): Promise<Song>;
    update(id: number, updateSongDto: UpdateSongDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
