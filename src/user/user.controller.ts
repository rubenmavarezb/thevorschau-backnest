import { Controller, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from './dto/create-user.dto';
import { Response } from 'express';
import { validate } from 'class-validator';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    createUser(@Body() user: CreateUser, @Res() res: Response): any {
        return this.userService.createUser(user, res);
    }

}