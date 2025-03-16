"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_notes_1 = __importDefault(require("../services/services.notes"));
class NoteController {
    createNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Request Body:", req.body); // Debugging line please ignore
            try {
                const noteData = req.body;
                const newNote = yield services_notes_1.default.createNote(noteData);
                res.status(201).json({
                    success: true,
                    message: "Note created successfully",
                    note: newNote,
                });
            }
            catch (error) {
                res.status(500).json({ message: "Error creating note", error });
            }
        });
    }
    getAllNotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Allnotes = yield services_notes_1.default.getAllNotes();
                res.status(200).json({
                    success: true,
                    message: "All notes fetched successfully",
                    data: Allnotes,
                });
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching notes", error });
            }
        });
    }
    getNoteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const note = yield services_notes_1.default.getNoteById(id);
                if (note) {
                    res.status(200).json({
                        success: true,
                        message: "Note fetched successfully",
                        data: note,
                    });
                }
                else {
                    res.status(404).json({
                        success: false,
                        message: "Note not found",
                    });
                }
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching note", error });
            }
        });
    }
    updateNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updatedNoteData = req.body;
                const updatedNote = yield services_notes_1.default.updateNote(id, updatedNoteData);
                if (updatedNote) {
                    res.status(200).json({
                        success: true,
                        message: "Note updated successfully",
                        note: updatedNote,
                    });
                }
                else {
                    res.status(404).json({
                        success: false,
                        message: "Note not found",
                    });
                }
            }
            catch (error) {
                res.status(500).json({ message: "Error updating note", error });
            }
        });
    }
    deleteNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const deletedNote = yield services_notes_1.default.deleteNote(id);
                if (deletedNote) {
                    res.status(200).json({
                        success: true,
                        message: "Note deleted successfully",
                    });
                }
                else {
                    res.status(404).json({
                        success: false,
                        message: "Note not found",
                    });
                }
            }
            catch (error) {
                res.status(500).json({ message: "Error deleting note", error });
            }
        });
    }
    getNotesByCategoryId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Request Body:", req.body); // Debugging line please ignore
            try {
                const categoryId = req.params.categoryId;
                const notes = yield services_notes_1.default.getNoteByCategoryId(categoryId);
                res.status(200).json({
                    success: true,
                    message: "Note fetched successfully",
                    data: notes,
                });
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching notes", error });
            }
        });
    }
}
exports.default = new NoteController();
