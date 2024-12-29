import { Model } from "sequelize-typescript";
import { Artist } from "src/artists/artist.model";
import { Song } from "src/songs/song.model";
export declare class Album extends Model<Album> {
    title: string;
    artist_id: number;
    album_cover: string;
    song_quantity: number;
    artist: Artist;
    songs: Song[];
}
