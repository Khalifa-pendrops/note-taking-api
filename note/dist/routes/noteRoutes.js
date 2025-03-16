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
const express_1 = __importDefault(require("express"));
const Notes_1 = require("../models/Notes");
const router = express_1.default.Router();
router.post("/category", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myCategory = new Notes_1.Category({
            name: req.body.name,
        });
        yield myCategory.save();
        // res.status(201).send(myCategory);
        res
            .status(201)
            .json({ message: "Category Created Successfully", data: myCategory });
    }
    catch (err) {
        console.error(err);
        // res.status(400).send(err);
        res.status(400).json({ message: "Server Error" });
    }
}));
router.post("/notes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myNote = new Notes_1.Note({
            title: req.body.title,
            content: req.body.content,
        });
        yield myNote.save();
        res.status(201).send(myNote);
    }
    catch (err) {
        console.error(err);
        res.status(400).send(err);
        // res.status(400).json({ message: "Server Error" });
    }
}));
router.get("/notes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myNotes = yield Notes_1.Note.find();
        res.send(myNotes);
    }
    catch (error) {
        res.send(500).send(error);
    }
}));
router.get("/notes/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myNote = yield Notes_1.Note.findById(req.params.id);
        if (myNote) {
            res.send(myNote);
        }
        else {
            res.status(404).send({ messae: "Ooops! Sorry Note not found ⛔" });
        }
    }
    catch (error) {
        res.sendStatus(500).send(error);
    }
}));
router.put("/notes/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myNote = yield Notes_1.Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (myNote) {
            res.send(myNote);
        }
        else {
            res.status(400).send({ message: "Note not found ⛔" });
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
router.delete("/notes/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myNote = yield Notes_1.Note.findByIdAndDelete(req.params.id);
        if (myNote) {
            res.status(200).send({ message: "Note deleted successfully ✅" });
        }
        else {
            res.status(400).send({ message: "No Note found to delete! ⛔" });
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
exports.default = router;
