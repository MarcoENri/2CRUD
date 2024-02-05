import { Injectable } from '@nestjs/common';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class BibliotecaService {
  constructor(private prisma: PrismaService) {}

  createbiblioteca(createBibliotecaDto: CreateBibliotecaDto) {
    return 'this action add a new Biblioteca';
  }
  findAll() {
    return this.prisma.biblioteca.findMany();
  }

  findOne(id: number) {
    return this.prisma.biblioteca.findUnique({ where: { id } });
  }

  update(id: number, updateContentDto: UpdateBibliotecaDto) {
    return this.prisma.biblioteca.update({
      where: { id },
      data: updateContentDto,
    });
  }

  remove(id: number) {
    return this.prisma.biblioteca.delete({ where: { id } });
  }
}
