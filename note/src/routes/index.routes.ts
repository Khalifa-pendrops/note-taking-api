import express from "express";
import noteRouter from "../routes/routes.notes";
import categoryRouter from "../routes/route.category";

const router = express.Router();

router.use("/notes", noteRouter);
router.use("/categories", categoryRouter);

export default router;
