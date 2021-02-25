import { IsNotEmpty, IsEmail, MinLength } from "class-validator";


export class CreateUser {

    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(6, {
        message:'Password is too short'
    })
    password: string;

}