// import { PopulateOptions } from "mongoose";
// import { PopulateOptions } from "mongoose";
// import { Note } from "./../models/Notes";
import { Request, Response } from "express";
import NoteService from "../services/services.notes";
import { INote } from "../models/models.notes";

class NoteController {
  async createNote(req: Request, res: Response) {
    console.log("Request Body:", req.body); // Debugging line please ignore
    try {
      const noteData: INote = req.body;
      const newNote = await NoteService.createNote(noteData);
      res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: newNote,
      });
    } catch (error) {
      res.status(500).json({ message: "Error creating note", error });
    }
  }

  async getAllNotes(req: Request, res: Response) {
    try {
      const Allnotes = await NoteService.getAllNotes();
      res.status(200).json({
        success: true,
        message: "All notes fetched successfully",
        data: Allnotes,
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching notes", error });
    }
  }

  async getNoteById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const note = await NoteService.getNoteById(id);
      if (note) {
        res.status(200).json({
          success: true,
          message: "Note fetched successfully",
          data: note,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Note not found",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching note", error });
    }
  }

  async updateNote(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedNoteData: INote = req.body;
      const updatedNote = await NoteService.updateNote(id, updatedNoteData);
      if (updatedNote) {
        res.status(200).json({
          success: true,
          message: "Note updated successfully",
          note: updatedNote,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Note not found",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating note", error });
    }
  }

  async deleteNote(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedNote = await NoteService.deleteNote(id);
      if (deletedNote) {
        res.status(200).json({
          success: true,
          message: "Note deleted successfully",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Note not found",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting note", error });
    }
  }

  async getNotesByCategoryId(req: Request, res: Response): Promise<any> {
    console.log("Request Body:", req.body); // Debugging line please ignore
    try {
      const categoryId = req.params.categoryId;
      const notes = await NoteService.getNoteByCategoryId(categoryId);

      res.status(200).json({
        success: true,
        message: "Note fetched successfully",
        data: notes,
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching notes", error });
    }
  }
}

export default new NoteController();
