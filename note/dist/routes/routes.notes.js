"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_notes_1 = __importDefault(require("../controllers/controllers.notes"));
const validateRequest_1 = require("../middleware/validateRequest");
const schema_validation_1 = __importDefault(require("../validations/schema.validation"));
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.validateRequest)(schema_validation_1.default), controllers_notes_1.default.createNote);
router.get("/", controllers_notes_1.default.getAllNotes);
router.get("/:id", controllers_notes_1.default.getNoteById);
router.put("/:id", controllers_notes_1.default.updateNote);
router.delete("/:id", controllers_notes_1.default.deleteNote);
router.get("/categories/:categoryId", controllers_notes_1.default.getNotesByCategoryId);
exports.default = router;
