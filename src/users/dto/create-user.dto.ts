import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsEmail()
    @IsNotEmpty()
    email : string;

    @IsString()
    @IsNotEmpty()
    @Length(5,50)
    password:string;

    @IsString()
    @IsOptional()
    @IsIn(['user','admin'])
    role:string;

    @IsString()
    @IsOptional()
    profile_image: string
}
