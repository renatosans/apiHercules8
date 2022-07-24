const { PrismaClient } = require('@prisma/client');


const host       = 'localhost'
const username   = 'root'
const password   = 'p@ssw0rd'
const port       = 3306
const database   = 'h8'
const requireSSL = '?sslaccept=strict&sslmode=require'


// DATABASE_URL="mysql://root:p@ssw0rd@localhost:3306/h8"
const url = `mysql://${username}:${password}@${host}:${port}/${database}`;
const prisma = new PrismaClient({datasources: { db: { url: url } } })

module.exports = prisma
