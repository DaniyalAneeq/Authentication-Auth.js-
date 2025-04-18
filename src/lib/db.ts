import { PrismaClient } from '../../prisma/generated/client';

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

// export const db = new PrismaClient(); // for production 