import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
///////////////////////////////////////////////////
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
///////////////////////////////////////////////////

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://thevorschau:root@cluster0.jf7x9.mongodb.net/thevorschau',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    ),
    AuthModule,
    UserModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
