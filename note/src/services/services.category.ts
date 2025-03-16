import { Category, ICategory } from "../models/models.category";

class CategoryService {
  async createCategory(name: string): Promise<ICategory> {
    // return new Category(category).save();
    return await Category.create({ name });
  }
  async getAllCategories() {
    return Category.find({});
  }

  async getCategoryById(categoryId: string) {
    return Category.findById(categoryId);
  }

  async updateCategory(categoryId: string, updatedCategory: ICategory) {
    return Category.findByIdAndUpdate(categoryId, updatedCategory, {
      new: true,
    });
  }

  async deleteCategory(categoryId: string) {
    return Category.findByIdAndDelete(categoryId);
  }
}

export default new CategoryService();


