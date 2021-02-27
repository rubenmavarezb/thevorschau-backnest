import {IsNotEmpty, IsString, IsArray, IsNumber} from "class-validator";

export class AddProductDTO {
    
    @IsNotEmpty()
    @IsString()
    name:string;
    
    @IsNotEmpty()
    @IsString()
    description:string;
    
    @IsNotEmpty()
    @IsString()
    gtin:string;
    
    @IsNotEmpty()
    @IsArray()
    photos:string[];
    
    @IsNotEmpty()
    @IsNumber()
    price:string;
    
    @IsNotEmpty()
    @IsNumber()
    stock:string;
}