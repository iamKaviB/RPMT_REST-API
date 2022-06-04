const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissionTypeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    deadDate: {
        type: Date,
        required: true,
    }


});

module.exports = mongoose.model("submissionType", submissionTypeSchema);