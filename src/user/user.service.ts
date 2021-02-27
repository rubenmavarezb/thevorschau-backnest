import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
/////////////////////////////////////////////////////
import { Model } from 'mongoose';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
////////////////////////////////////////////////////
import { UserDocument } from './user.schema';
import { CreateUser } from './dto/create-user.dto';



@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}
    
    async createUser(user: CreateUser, res: Response) {
        console.log(user);

        if(!Object.keys(user)) {
            return res.status(400).json({ msg: 'All fields are required'})
        }

        const { email, password } = user;

        let userDB = await this.userModel.findOne({email});

        if(userDB) {
           return res.status(400).json({ msg: 'Email already exists' })
        }

        userDB = new this.userModel(user);

        const salt = await bcrypt.genSalt();
        userDB.password = await bcrypt.hash(password, salt);

        try {
            await userDB.save();
            res.json({msg: 'User created'})
        } catch(error) {
            console.log(error);
        }

    }
}
