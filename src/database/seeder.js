const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

async function createUser(data) {
  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.create({
      data: data
    });

    console.log(`User created with ID: ${user.id}`);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser({
  name: 'Aprimivi Manda',
  email: 'nda@gmail.com',
  password: bcrypt.hashSync('nda12345', 10)
});
