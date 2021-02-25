import { IsNotEmpty, IsEmail } from "class-validator";


export class AuthenticateUser {

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

}
