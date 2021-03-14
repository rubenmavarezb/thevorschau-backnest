import { Controller, Post, Res, Get, Req } from '@nestjs/common';
import { Request, Response } from 'express'
/////////////////////////////////////////////
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService){}

    @Get()
    getCart(@Req() req: Request, @Res() res: Response){
        return this.cartService.getCart(req, res)
    }

    @Post()
    addToCart(@Req() req: Request, @Res() res:Response) {
        return this.cartService.addToCart(req, res);
    }
}
