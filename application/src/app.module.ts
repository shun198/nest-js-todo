import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // この記述を書くことでnestjs/configのconfig.module.tsをimportできる
    // https://github.com/nestjs/config/blob/master/lib/config.module.ts
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    TodoModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
