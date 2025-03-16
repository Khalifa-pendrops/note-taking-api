"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Note, Category } from './models/Notes';
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const noteRoutes_1 = __importDefault(require("./routes/noteRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 8080;
app.use(express_1.default.json());
app.use("/api", noteRoutes_1.default);
// app.use("/api", Note);
// app.use("/api", router);
mongoose_1.default
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("Error connecting MongoDB:", err));
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
