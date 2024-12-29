import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './album.model';
export declare class AlbumsService {
    private AlbumModel;
    constructor(AlbumModel: typeof Album);
    create(createAlbumDto: CreateAlbumDto): Promise<Album>;
    findAll(): Promise<Album[]>;
    findOne(id: number): Promise<Album>;
    update(id: number, updateAlbumDto: UpdateAlbumDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
