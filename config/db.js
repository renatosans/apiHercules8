const { PrismaClient } = require('@prisma/client');


// dados para conexão com banco de dados serverless
const host     = 'r0e93010lf0s.us-east-3.psdb.cloud';
const username = Buffer.from('YmhiYzBtaW13dTc1', 'base64').toString('ascii');
const password = Buffer.from('cHNjYWxlX3B3X0F5ZHFjcG1nSnROSFZpYnUwX3NfeDFjaWp0Q0V3eGZvVERpNVRXakZJVHM=', 'base64').toString('ascii');
const port     = 3306
const database = 'hercules8'
const setSSL   = 'sslaccept=strict&sslmode=require'


// DATABASE_URL="mysql://root:p@ssw0rd@localhost:3306/h8"
const url = `mysql://${username}:${password}@${host}:${port}/${database}?${setSSL}`;
const prisma = new PrismaClient({datasources: { db: { url: url } } })

module.exports = prisma
