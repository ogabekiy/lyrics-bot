import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
export declare class AlbumsController {
    private readonly albumsService;
    constructor(albumsService: AlbumsService);
    create(createAlbumDto: CreateAlbumDto): Promise<import("./album.model").Album>;
    findAll(): Promise<import("./album.model").Album[]>;
    findOne(id: string): Promise<import("./album.model").Album>;
    update(id: string, updateAlbumDto: UpdateAlbumDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
