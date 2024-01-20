import { Schema, model } from "mongoose";

const todosSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
      enum: ["pending", "rejected"],
    },
  },
  {
    timestamps: true,
  }
);

const Todos = model("Todos", todosSchema);

export default Todos;
