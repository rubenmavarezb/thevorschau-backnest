import { Injectable } from '@nestjs/common';
import { Response } from 'express';
///////////////////////////////////////////////////////////////
import { AuthenticateUser } from './dto/authenticate-user.dto';
import { UserAuthenticated } from './dto/user-authenticated.dto';
///////////////////////////////////////////////////////////////

@Injectable()
export class AuthService {

    authenticateUser(authUser: AuthenticateUser) {
        return authUser
    }

    userAuthenticated(user: UserAuthenticated, res: Response) {
        res.json({user: user});
    }
}
