import mongoose, { Schema } from "mongoose";

const uploadSchema = new Schema({
  filePath: { type: String, require: true },
});

export const uploadModel = mongoose.model("uploads", uploadSchema);
