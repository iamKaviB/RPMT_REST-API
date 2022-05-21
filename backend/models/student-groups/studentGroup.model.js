const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentGroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

module.exports = User = mongoose.model("StudentGroup", studentGroupSchema);