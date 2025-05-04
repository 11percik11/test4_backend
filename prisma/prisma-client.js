// prisma/prisma-client.js
const { PrismaClient } = require('@prisma/client');

let prisma;

try {
  prisma = new PrismaClient();
  console.log('Prisma Client успешно инициализирован');
} catch (error) {
  console.error('Ошибка инициализации Prisma Client:', error);
  process.exit(1);
}

module.exports = prisma;