/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://aaaaa:aaaaaa@clusterlg.hqndx.mongodb.net/nest_main?retryWrites=true&w=majority', {
      autoCreate: true
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
