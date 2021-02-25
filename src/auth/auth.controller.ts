import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateUser } from './dto/authenticate-user.dto';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post()
    authenticateUser(@Body() user:AuthenticateUser) {
        return this.authService.authenticateUser(user);
    }
    @Get()
    userAuthenticated() {
        return this.authService.userAuthenticated();
    }
}
