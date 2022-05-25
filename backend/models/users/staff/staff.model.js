const mongoose = require("mongoose");
const { Schema } = mongoose;

const staffSchema = new Schema({
    userId: {
        type: String,
        required: true,
    }
});

module.exports = User = mongoose.model("staff", staffSchema);