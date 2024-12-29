import { Model } from "sequelize-typescript";
import { Song } from "src/songs/song.model";
export declare class User extends Model<User> {
    name: string;
    email: string;
    password: string;
    role: string;
    profile_image: string;
    songs: Song[];
}
