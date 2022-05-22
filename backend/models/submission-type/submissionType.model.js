const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissionTypeSchema = new Schema({
    type: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("submissionType", submissionTypeSchema);