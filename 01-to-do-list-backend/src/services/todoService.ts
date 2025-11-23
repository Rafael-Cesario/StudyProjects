import type { ITodoCreate, ITodoGetOne, ITodoRemove, ITodoUpdate } from "../interfaces/todoInterface";
import { prisma } from "../prisma";

class TodoService {
  async create({ title, notes }: ITodoCreate) {
    await prisma.todo.create({ data: { title, notes } });
    return `Sucess: New todo created.`;
  }

  async getAll() {
    const todos = await prisma.todo.findMany({});
    return todos;
  }

  async getOne({ id }: ITodoGetOne) {
    const todo = await prisma.todo.findUnique({ where: { id } });
    return todo;
  }

  async update({ id, title, notes }: ITodoUpdate) {
    await prisma.todo.update({
      where: { id },
      data: { title, notes },
    });

    return `Sucess: Todo updated.`;
  }

  async remove({ id }: ITodoRemove) {
    await prisma.todo.delete({ where: { id } });
    return `Sucess: Todo removed.`;
  }
}

export const todoService = new TodoService();
