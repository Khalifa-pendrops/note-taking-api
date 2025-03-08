import express, { Request, Response } from "express";
import mongoose from "mongoose";
import noteRoutes from "./routes/noteRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/api", noteRoutes);

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Error connecting MongoDB:", err));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
