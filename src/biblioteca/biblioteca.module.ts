import { Module } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { BibliotecaController } from './biblioteca.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  controllers: [BibliotecaController],
  providers: [BibliotecaService],
  imports:[PrismaModule], 
})
export class BibliotecaModule {}
