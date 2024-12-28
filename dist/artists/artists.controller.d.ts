import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
export declare class ArtistsController {
    private readonly artistsService;
    constructor(artistsService: ArtistsService);
    create(createArtistDto: CreateArtistDto): Promise<import("./artist.model").Artist>;
    findAll(): Promise<import("./artist.model").Artist[]>;
    findOne(id: string): Promise<import("./artist.model").Artist>;
    update(id: string, updateArtistDto: UpdateArtistDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
