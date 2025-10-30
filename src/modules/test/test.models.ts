
import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const model = mongoose.model("Test", schema);
export default model;