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
Object.defineProperty(exports, "__esModule", { value: true });
const models_notes_1 = require("../models/models.notes");
class NoteService {
    // find out what exactly is happening here...tabnine did this
    findOne(query) {
        throw new Error("Method not implemented.");
    }
    createNote(noteData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_notes_1.Note.create(noteData);
        });
    }
    getAllNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_notes_1.Note.find();
        });
    }
    getNoteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_notes_1.Note.findById(id);
        });
    }
    updateNote(id, updatedNote) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_notes_1.Note.findByIdAndUpdate(id, updatedNote, { new: true });
        });
    }
    deleteNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_notes_1.Note.findByIdAndDelete(id);
        });
    }
    getNoteByCategoryId(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_notes_1.Note.find({ category: categoryId });
        });
    }
}
exports.default = new NoteService();
