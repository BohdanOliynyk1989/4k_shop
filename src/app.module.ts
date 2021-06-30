import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductControllerModule } from './product/product-controller/product-controller.module';


@Module({
  imports: [
    ProductControllerModule,
    MongooseModule.forRoot(`mongodb+srv://bohdan:12345@cluster0.vylyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useFindAndModify: false})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
