import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://bohdan:12345@cluster0.vylyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useFindAndModify: false}),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

