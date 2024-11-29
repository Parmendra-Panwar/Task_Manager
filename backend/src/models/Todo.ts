import mongoose, { Schema, Document } from "mongoose";

interface TodoDocument extends Document {
  title: string;
  description: string;
  completed: boolean;
}

const TodoSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.model<TodoDocument>("Todo", TodoSchema);
