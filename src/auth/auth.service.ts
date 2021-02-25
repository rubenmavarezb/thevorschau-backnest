import { Injectable } from '@nestjs/common';
import { AuthenticateUser } from './dto/authenticate-user.dto';


@Injectable()
export class AuthService {

    authenticateUser(authUser: AuthenticateUser) {
        return authUser
    }

    userAuthenticated() {
        return 'Autenticado...'
    }
}
