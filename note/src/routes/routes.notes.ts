import express from "express";
import NoteController from "../controllers/controllers.notes";
import { validateRequest } from "../middleware/validateRequest";
import validationSchema from "../validations/schema.validation";

const router = express.Router();

router.post("/", validateRequest(validationSchema), NoteController.createNote);
router.get("/", NoteController.getAllNotes);
router.get("/:id", NoteController.getNoteById);
router.put("/:id", NoteController.updateNote);
router.delete("/:id", NoteController.deleteNote);
router.get("/categories/:categoryId", NoteController.getNotesByCategoryId);

export default router;
