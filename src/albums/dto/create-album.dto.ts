import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAlbumDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsNumber()
    @IsNotEmpty()
    artist_id: number

    @IsString()
    @IsNotEmpty()
    album_cover: string

    @IsNumber()
    @IsNotEmpty()
    song_quantity: number
}
