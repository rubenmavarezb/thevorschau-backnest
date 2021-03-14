import { Controller, Get, Post, Body, Res,  } from '@nestjs/common';
import { Response } from 'express';
////////////////////////////////////////////////////////////////////
import { AuthService } from './auth.service';
import { AuthenticateUser } from './dto/authenticate-user.dto';
import { UserAuthenticated } from './dto/user-authenticated.dto';
////////////////////////////////////////////////////////////////////

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post()
    authenticateUser(@Body() user:AuthenticateUser) {
        return this.authService.authenticateUser(user);
    }
    
    @Get()
    userAuthenticated(@Body() user:UserAuthenticated, @Res() res: Response) {
        return this.authService.userAuthenticated(user, res);
    }
}
