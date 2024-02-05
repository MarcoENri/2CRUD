import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  
  const content1 = await prisma.biblioteca.upsert({
    where: { title: 'Clean Code de Robert C. Martin ' },
    update: {},
    create: {
      title: 'Clean Code de Robert C. Martin ',
      description: 'Este es uno de los mejores libros clásicos para principiantes ya que te enseñará todos los trucos',
      lastSee: 'Biblioteca Municipal',
      countLastSee: 12,
      extinct: false,
    },
  });

  const content2 = await prisma.biblioteca.upsert({
    where: { title:'The Pragmatic Programmer: Your Journey to Mastery'},
    update: {},
    create: {
      title: 'The Pragmatic Programmer: Your Journey to Mastery',
      description: 'Este es un libro de Andrew Hunt y David Thomas, sobre programación e ingeniería de software.',
      lastSee: 'Biblioteca Municipal',
      countLastSee: 5,
      extinct: false,
    },
  });

  console.log({ content1, content2 });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
