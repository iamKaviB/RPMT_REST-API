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
    default: ""
  },
  cosuperviserId: {
    type: String,
    default: ""
  },
  panelMembersId: {
    type: [],
  },
  supervisorStatus: {
    type: Boolean,
    default: false
  },
  cosupervisorStatus: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model("StudentGroup", studentGroupSchema);