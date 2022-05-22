const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentGroupSchema = new Schema({
  topic: {
    type: String,
    required: true,
  },
  member1Id: {
    type: String,
    required: true,
  },
  member2Id: {
    type: String,
    required: true,
  },
  member3Id: {
    type: String,
    required: true,
  },
  member4Id: {
    type: String,
    required: true,
  },
  supervisorId: {
    type: String,
  },
  cosuperviserId: {
    type: String,
  },
  panelMembersId: {
    type: [],
  },
  supervisorStatus: {
    type: Boolean,
  },
  cosupervisorStatus: {
    type: Boolean,
  },
});

module.exports = mongoose.model("StudentGroup", studentGroupSchema);