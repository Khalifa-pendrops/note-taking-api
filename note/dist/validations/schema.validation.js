"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validationSchema = {
    title: (value) => typeof value === "string" && value.trim().length >= 3
        ? null
        : "Title must be equla to or more than 3 characters long",
    content: (value) => typeof value === "string" && value.trim().length >= 10
        ? null
        : "Content must be at least 10 characters long",
    category: (value) => typeof value === "string" && value.length === 24
        ? null
        : "Invalid category ID",
};
exports.default = validationSchema;
