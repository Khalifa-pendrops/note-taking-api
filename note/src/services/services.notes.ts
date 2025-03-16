import { Note, INote } from "../models/models.notes";
import { Category } from "../models/models.category";
import mongoose from "mongoose";

class NoteService {
  findOne(query: {
    title: Partial<INote> | { _id: mongoose.Types.ObjectId };
  }): INote | PromiseLike<INote | null> | null {
    throw new Error("Method not implemented.");
  }

  async createNote(noteData: INote): Promise<INote> {
    return await Note.create(noteData);
  }
  async getAllNotes() {
    return await Note.find();
  }

  async getNoteById(id: string) {
    return await Note.findById(id);
  }

  async updateNote(id: string, updatedNote: INote) {
    return await Note.findByIdAndUpdate(id, updatedNote, { new: true });
  }
  async deleteNote(id: string) {
    return await Note.findByIdAndDelete(id);
  }

  async getNoteByCategoryId(categoryId: string) {
    return await Note.find({ category: categoryId });
  }
}

export default new NoteService();
