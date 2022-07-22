const { PrismaClient } = require('@prisma/client');


// dados para conexão com banco de dados serverless
const host     = 'r0e93010lf0s.us-east-3.psdb.cloud'
const username = Buffer.from('Y2o1a3R3dTRlaGlr', 'base64').toString('ascii');
const password = Buffer.from('cHNjYWxlX3B3X2VoNEpRT0ZxSmZNOXZyRnFnZ2pKYXNhY1RpaWRNNkhMblNDdmlqT2FrX3c=', 'base64').toString('ascii');
const port     = 3306
const database = 'hercules8'


// DATABASE_URL="mysql://root:p@ssw0rd@localhost:3306/h8"
const url = `mysql://${username}:${password}@${host}:${port}/${database}?sslmode=require`;
const prisma = new PrismaClient({datasources: { db: { url: url } } })

module.exports = prisma
