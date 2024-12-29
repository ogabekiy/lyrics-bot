import { Model } from "sequelize-typescript";
import { Album } from "src/albums/album.model";
import { Song } from "src/songs/song.model";
export declare class Artist extends Model<Artist> {
    name: string;
    artist_photo: string;
    albums: Album[];
    songs: Song[];
}
