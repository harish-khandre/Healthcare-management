import { PrismaClient } from "@prisma/client";

const prismaClientSignleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSignleton>;
}

const prisma = global.prismaGlobal ?? prismaClientSignleton();

export default prisma;

if (process.env.NODE_ENV !== "production") {
  global.prismaGlobal = prisma;
}
