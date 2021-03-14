import { Prop, Schema, SchemaFactory,SchemaOptions } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { ProductDocument } from '../products/product.schema';
import { UserDocument } from '../user/user.schema';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {

    @Prop({ default: [], type:Array })
    products: ProductDocument[];

    @Prop({ default: Date.now() })
    timestamp: Date;

    @Prop({ type: SchemaOptions.Types.ObjectId, ref: 'User', default: null})
    owner: UserDocument;

}


export const CartSchema = SchemaFactory.createForClass(Cart);