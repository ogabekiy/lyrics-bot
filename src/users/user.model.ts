import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Song } from "src/songs/song.model";

@Table({tableName:'users'})
export class User extends Model<User>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;
    @Column({ 
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    })
    
    email: string;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: 'user',
        validate: {
            isIn: [['user', 'admin']]
        }
    })
    role: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: 'https://openclipart.org/image/800px/247320'
    })
    profile_image: string;

    @HasMany(() => Song,{as: 'created_songs'})
    songs: Song[]
}