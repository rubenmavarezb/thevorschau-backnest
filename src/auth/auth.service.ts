import { Injectable } from '@nestjs/common';
import { AuthenticateUser } from './dto/authenticate-user.dto';


@Injectable()
export class AuthService {

    authenticateUser(authUser: AuthenticateUser) {
        return 'autenticando...'
    }

    userAuthenticated() {
        return 'Autenticado...'
    }
}
