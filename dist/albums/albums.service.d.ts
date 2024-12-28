import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
export declare class AlbumsService {
    create(createAlbumDto: CreateAlbumDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAlbumDto: UpdateAlbumDto): string;
    remove(id: number): string;
}
