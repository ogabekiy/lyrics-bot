import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'albums'})
export class Album extends Model<Album>{
    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    title: string
}