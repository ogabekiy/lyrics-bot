import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateArtistDto {
    @IsString()
    @IsNotEmpty()
    name :string

    @IsString()
    @IsOptional()
    artist_photo :string
}
