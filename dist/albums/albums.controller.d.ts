import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
export declare class AlbumsController {
    private readonly albumsService;
    constructor(albumsService: AlbumsService);
    create(createAlbumDto: CreateAlbumDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAlbumDto: UpdateAlbumDto): string;
    remove(id: string): string;
}
