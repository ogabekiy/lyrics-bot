import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './artist.model';
export declare class ArtistsService {
    private ArtistModel;
    constructor(ArtistModel: typeof Artist);
    create(createArtistDto: CreateArtistDto): Promise<Artist>;
    findAll(): Promise<Artist[]>;
    findOne(id: number): Promise<Artist>;
    update(id: number, updateArtistDto: UpdateArtistDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
