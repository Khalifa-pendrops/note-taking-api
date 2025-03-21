"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = exports.Category = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
});
const noteSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Category",
    },
}, 
// auto generated createdAt and updatedAT properties
{
    timestamps: true,
});
exports.Category = (0, mongoose_1.model)("Category", categorySchema);
exports.Note = (0, mongoose_1.model)("Note", noteSchema);
