const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },studentId: {
        type: String,
        required: true,
    },
    groupId: {
        type: String,
        default :""
    },
    batch: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("student", studentSchema);