import express, { Request, response, Response } from "express";
import { Note } from "../models/Notes";

const router = express.Router();

router.post("/notes", async (req: Request, res: Response) => {
  try {
    const myNote = new Note({
      title: req.body.title,
      content: req.body.content,
    });

    await myNote.save();

    res.status(201).send(myNote);
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
    // res.status(400).json({ message: "Server Error" });
  }
});

router.get("/notes", async (req: Request, res: Response) => {
  try {
    const myNotes = await Note.find();
    res.send(myNotes);
  } catch (error) {
    res.send(500).send(error);
  }
});

router.get("/notes/:id", async (req: Request, res: Response) => {
  try {
    const myNote = await Note.findById(req.params.id);
    if (myNote) {
      res.send(myNote);
    } else {
      res.status(404).send({ messae: "Ooops! Sorry Note not found ⛔" });
    }
  } catch (error) {
    res.sendStatus(500).send(error);
  }
});

router.put("/notes/:id", async (req: Request, res: Response) => {
  try {
    const myNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (myNote) {
      res.send(myNote);
    } else {
      res.status(400).send({ message: "Note not found ⛔" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/notes/:id", async (req: Request, res: Response) => {
  try {
    const myNote = await Note.findByIdAndDelete(req.params.id);
    if (myNote) {
      res.status(200).send({ message: "Note deleted successfully ✅" });
    } else {
      res.status(400).send({ message: "No Note found to delete! ⛔" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
