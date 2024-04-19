const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class TaskModel {
  async create(req, data) {
    const currentUser = req.user.id;
    data.user_id = currentUser;
    const task = await prisma.task.create({
      data: data
    });

    return task;
  }

  async getAll(req) {
    const currentUser = req.user.id;
    const tasks = await prisma.task.findMany({
      where: {
        user_id: parseInt(currentUser)
      }
    });

    if (tasks.length === 0) {
      throw new Error('No tasks found');
    }

    return tasks;
  }

  async getById(req, taskId) {
    const currentUser = req.user.id;
    const task = await prisma.task.findUnique({
      where: {
        id: parseInt(taskId),
        user_id: parseInt(currentUser)
      }
    });

    if (!task) {
      throw new Error('Task not found');
    }

    return task;
  }

  async updateById(req, taskId, data) {
    const currentUser = req.user.id;
    const task = await prisma.task.findUnique({
      where: {
        id: parseInt(taskId),
        user_id: parseInt(currentUser)
      }
    });

    if (!task) {
      throw new Error('Task not found');
    }

    await prisma.task.update({
      where: {
        id: parseInt(taskId)
      },
      data: data
    });
  }

  async deleteById(req, taskId) {
    const currentUser = req.user.id;
    const task = await prisma.task.findUnique({
      where: {
        id: parseInt(taskId),
        user_id: parseInt(currentUser)
      }
    });

    if (!task) {
      throw new Error('Task not found');
    }

    await prisma.task.delete({
      where: {
        id: parseInt(taskId)
      }
    });
  }
}

module.exports = TaskModel;
