const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentGroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("StudentGroup", studentGroupSchema);