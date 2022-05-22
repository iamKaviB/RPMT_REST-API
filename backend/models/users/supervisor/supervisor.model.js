const mongoose = require("mongoose");
const { Schema } = mongoose;

const supervisorSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    studentGroup: {
        type: []
    },
});

module.exports = User = mongoose.model("supervisor", supervisorSchema);