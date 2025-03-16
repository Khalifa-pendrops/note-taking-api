import { Request, Response } from "express";
import CategoryService from "../services/services.category";

class CategoryController {
  async createCategory(req: Request, res: Response): Promise<any> {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ message: "Category name is required" });
      }

      // const existingCategory = await CategoryService.getCategoryByName(name);

      // if (existingCategory) {
      //   return res.status(400).json({
      //     message: "Category with the same name already exists",
      //     existing_name:
      //   });
      // }
      const newCategory = await CategoryService.createCategory(name);
      await newCategory.save();
      res.status(201).json({
        success: true,
        message: "Category created successfully!",
        data: newCategory,
      });
    } catch (err) {
      res.status(500).json({ message: "Error creating category", err });
    }
  }

  async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await CategoryService.getAllCategories();
      res.json(categories);
    } catch (err) {
      res.status(500).json({ message: "Error fetching categories", err });
    }
  }

  async getCategoryById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const category = await CategoryService.getCategoryById(id);
      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }
      res.json({
        success: true,
        message: "Category fetched successfuly!",
        data: category,
      });
    } catch (err) {
      res.status(500).json({ message: "Error fetching category", err });
    }
  }

  async updateCategory(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const { name } = req.body;

      // Log the incoming request
      console.log(`Request to update category with ID: ${id}`);
      console.log(`Request body: ${JSON.stringify(req.body)}`);

      if (!name) {
        return res.status(400).json({
          success: false,
          message: "Name is required for updating the category",
        });
      }

      const updatedCategory = await CategoryService.updateCategory(id, name);

      if (!updatedCategory) {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }
      res.json({
        success: true,
        message: "Category updated successfully!",
        data: updatedCategory,
      });
    } catch (err: any) {
      res
        .status(500)
        .json({ message: "Error updating category", error: err.message });
    }
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedCategory = await CategoryService.deleteCategory(id);
      res.status(200).json({
        success: true,
        message: "Category deleted",
        deletedCategory,
      });
    } catch (err) {
      res.status(500).json({ message: "Error deleting category", err });
    }
  }
}

export default new CategoryController();
