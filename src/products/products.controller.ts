import { Controller, Get, Param, Body, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
////////////////////////////////////////////////////
import { Response } from 'express';
////////////////////////////////////////////////////
import { ProductsService } from './products.service'
import { ProductDocument } from './product.schema';
import { AddProductDTO } from './dto/add-product.dto';


@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) {}
    
    @Get()
    getAllProducts(@Res() res: Response): any {
        return this.productService.getAllProducts(res);
    }

    @Get('/product/:id')
    getProductById(@Param('id') id:string, @Res() res: Response): any {
        return this.productService.getProductById(id, res);
    }

    @Get('/category/:category')
    getProductsByCategory(@Param('category') category:string, @Res() res: Response) {
        return this.productService.getProductsByCategory(category, res);
    }

    @Post()
    @UsePipes(ValidationPipe)
    addProduct(@Body() product: AddProductDTO, @Res() res: Response) {
        return this.productService.addProduct(product, res)
    }
}
