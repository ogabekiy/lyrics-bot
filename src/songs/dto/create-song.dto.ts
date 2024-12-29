import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSongDto {
    @IsString()
    @IsNotEmpty()
    title: string


    @IsString()
    @IsNotEmpty()
    lyrics: string

    @IsString()
    @IsOptional()
    song_cover: string

    @IsNumber()
    @IsNotEmpty()
    artist_id: number

    @IsNumber()
    @IsOptional()
    album_id: number

    @IsNumber()
    @IsOptional()
    added_by: number


}
