import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Artist } from "src/artists/artist.model";
import { Song } from "src/songs/song.model";

@Table({tableName: 'albums'})
export class Album extends Model<Album>{
    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    title: string

    @ForeignKey(() => Artist)
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    artist_id: number
    
    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    album_cover: string

    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    song_quantity: number

    @BelongsTo(() => Artist)
    artist: Artist

    @HasMany(() => Song)
    songs: Song[]

}