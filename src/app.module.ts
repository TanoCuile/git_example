import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { UsersModule } from './modules/users/users.module';


@Module({imports: [UsersModule], controllers: [MainController]})
export class AppModule {}
