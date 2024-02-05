import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { BibliotecaModule } from './biblioteca/biblioteca.module';

@Module({
  imports: [PrismaModule, BibliotecaModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
