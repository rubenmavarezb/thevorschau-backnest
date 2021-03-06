import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
///////////////////////////////////////////////////////
import { Model } from 'mongoose';
import { Response } from 'express';
///////////////////////////////////////////////////////
import { ProductDocument } from './product.schema';
import { AddProductDTO } from './dto/add-product.dto';
//////////////////////////////////////////////////////

@Injectable()
export class ProductsService {

    constructor(@InjectModel('Product') private productModel: Model<ProductDocument>){}

    async getAllProducts(res: Response) {
        
        try {
            const allProds = await this.productModel.find({});
            res.status(200).json({products: allProds});
        } catch (error) {
            console.log(error);
            res.status(400).json({msg: 'There was a mistake uploading the products'});
        }
    }

    async getProductById(id: string, res: Response) {
        
        try {
            const prod = await this.productModel.findById(id);
            res.status(200).json({product: prod});
        } catch (error) {
            console.log(error);
            res.status(400).json({msg: "There was a mistake uploading the product"});
        }
    }

    async getProductsByCategory(category:string, res: Response) {

        try {
            const products = await this.productModel.find({category})
            res.status(200).json({products: products});
        } catch (error) {
            console.log(error)
            res.status(400).json({msg: "There was a mistake uploading the product"});
        }
    }

    async addProduct(product: AddProductDTO, res: Response) {

        let prod = new this.productModel(product);

        try {
            await prod.save();
            res.status(200).json({msg: 'Product created'})
        } catch (error) {
            console.log(error);
            res.status(400).json({msg: 'No se pudo cargar el producto'})
        }
    }

}
