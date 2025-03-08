import { Timestamp } from "./../../node_modules/bson/src/timestamp";
import { Document, Schema, model } from "mongoose";

interface INoteInfo extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema<INoteInfo>(
  {
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
  }
);

export const Note = model<INoteInfo>("Note", noteSchema);
