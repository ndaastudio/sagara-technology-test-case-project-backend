const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

class UserModel {
  async login(data) {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    });
    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) {
      throw new Error('Invalid email or password');
    }

    return { ...user, password: undefined };
  }
}

module.exports = UserModel;
