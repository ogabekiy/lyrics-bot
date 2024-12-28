import { Column, DataType, Model, Table } from "sequelize-typescript";

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
    
}