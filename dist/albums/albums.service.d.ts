import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './album.model';
import { Artist } from 'src/artists/artist.model';
export declare class AlbumsService {
    private AlbumModel;
    private ArtistModel;
    constructor(AlbumModel: typeof Album, ArtistModel: typeof Artist);
    create(createAlbumDto: CreateAlbumDto): Promise<Album>;
    findAll(): Promise<Album[]>;
    findOne(id: number): Promise<Album>;
    update(id: number, updateAlbumDto: UpdateAlbumDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
