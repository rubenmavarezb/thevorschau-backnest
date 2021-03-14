import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
///////////////////////////////////////////////////////
import { Model } from 'mongoose';
import { Request, Response } from 'express';
///////////////////////////////////////////////////////
import { CartDocument } from './cart.schema';
import { ProductDocument } from '../products/product.schema'
//////////////////////////////////////////////////////

@Injectable()
export class CartService {
    constructor(@InjectModel('Cart') private cartModel: Model<CartDocument>, @InjectModel('Product') private productModel: Model<ProductDocument>){}

    async getCart(req: Request, res: Response) {
        const { id } = req.body;

        try {
            const userCart = await this.cartModel.findOne({ owner:id });
            
            if(!userCart) {
               return res.status(400).json({msg: 'You need to login o create an account in order to see your cart!'});
            }
    
            res.status(200).json({cart: userCart.products, id:userCart._id});
        } catch (error) {
            console.log(error);
        }
    }
    
    async addToCart(req: Request, res: Response) {

        const { id, prodId, quantity } = req.body;

        let userCart = await this.cartModel.findOne({ owner: id });
        let product = await this.productModel.findById(prodId);


        try {
            if(product) product.quantity = quantity;

        //Create the cart if the user doesn't have one and return
        if(!userCart) {

            const data = {
                owner: id,
                products: [product]
            }
    
            const newCart = await this.cartModel.create(data);
            await newCart.save();
            return res.status(200).json({msg:'Product added to the cart!'})
        }

        //Find the product in the cart to update it and return
        const isInCart = userCart.products.find((element) => String(element._id) === prodId);

        if(isInCart) {
            const prodIndex = product ? userCart.products.indexOf(isInCart) : -1;

            userCart.products[prodIndex].quantity += quantity;

            await this.cartModel.findOneAndUpdate({owner: id}, userCart, {new:true});

            return res.status(200).json({msg:'Product modified!'})
        }

        userCart.products.push(product);
        await this.cartModel.findOneAndUpdate({owner: id}, userCart, {new:true});
        res.status(200).json({msg:'Product added!'})

        } catch (error) {
            console.log(error)
        }
    }
    
    async updateItemInCart(req: Request, res: Response) {
        console.log('Desde updateItemInCart');
        console.log(req.body)
    }
    
    async deleteItemInCart(req: Request, res: Response) {
        console.log('Desde deleteItemInCart');
        console.log(req.body)
    }
}
