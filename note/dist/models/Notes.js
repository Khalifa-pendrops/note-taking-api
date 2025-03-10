"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, 
// auto generated createdAt and updatedAT properties
{
    timestamps: true,
});
exports.Note = (0, mongoose_1.model)("Note", noteSchema);
