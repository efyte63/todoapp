import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true
  },

  todos: {
    type: [String],   
    default: []       
  }
});

const todoModel = mongoose.model("todos", todoSchema);

export default todoModel;