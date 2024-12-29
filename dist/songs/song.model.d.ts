import { Model } from "sequelize-typescript";
import { Album } from "src/albums/album.model";
import { Artist } from "src/artists/artist.model";
import { User } from "src/users/user.model";
export declare class Song extends Model<Song> {
    title: string;
    lyrics: string;
    song_cover: string;
    artist_id: number;
    artist: Artist;
    album_id: number;
    album: Album;
    added_by: number;
    user: User;
}
