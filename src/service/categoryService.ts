import { Category } from "@prisma/client";
import { prisma } from "../database/prisma";
import {
  categoryCreate,
 
} from "../interfaces/categoryInterfaces";

export class CategorySevice {
  async create(payLoad: categoryCreate, userId: number): Promise<Category> {
    const data = await prisma.category.create({ data: { ...payLoad, userId }});
    return data;
  }
  async delete(categoryId: number): Promise<void> {
    await prisma.category.delete({ where: { id: categoryId } });
  }
}
