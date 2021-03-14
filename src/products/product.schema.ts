import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {

    @Prop({ required: true, trim: true })
    name: string;

    @Prop({ required: true, trim: true })
    description: string;

    @Prop({ required: true, trim: true })
    gtin: string;

    @Prop({ required: true })
    photos: string[];
    
    @Prop({ required: true, trim: true })
    price: number;

    @Prop({ required: true, trim: true })
    quantity: number;
    
    @Prop({ required: true, trim: true })
    stock: number;
    
    @Prop({ required: true, default: Date.now() })
    created: Date;

}


export const ProductSchema = SchemaFactory.createForClass(Product);