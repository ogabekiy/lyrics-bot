import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Album } from "src/albums/album.model";
import { Song } from "src/songs/song.model";

@Table({tableName: 'artist'})
export class Artist extends Model<Artist>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name :string

    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: 'https://openclipart.org/image/800px/247320'
    })
    artist_photo : string
    

    @HasMany(() => Album)
    albums: Album[]

    @HasMany(() => Song)
    songs: Song[]
}