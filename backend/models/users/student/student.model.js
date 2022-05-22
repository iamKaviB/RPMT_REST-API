const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
    studentId: {
        type: String,
        required: true,
    },
    groupId: {
        type: String
    },
    batch: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("student", studentSchema);