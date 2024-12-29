import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Album } from "src/albums/album.model";
import { Artist } from "src/artists/artist.model";
import { User } from "src/users/user.model";

@Table({tableName:'songs'})
export class Song extends Model<Song>{
    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    title: string

    @Column({
        type : DataType.TEXT,
        allowNull: false
    })
    lyrics: string

    @Column({
        type: DataType.STRING,
        allowNull:false,
        defaultValue: 'https://cphlibrary.libnet.info/images/events/cphlibrary/spotify.png'
        })
    song_cover: string

    @ForeignKey(() => Artist)
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    artist_id:number

    @BelongsTo(() => Artist)
    artist: Artist

    @ForeignKey(() => Album)
    @Column({
        type: DataType.INTEGER,
        allowNull:true
    })
    album_id:number

    @BelongsTo(() => Album)
    album: Album

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    added_by :number

    @BelongsTo(() => User)
    user: User
}