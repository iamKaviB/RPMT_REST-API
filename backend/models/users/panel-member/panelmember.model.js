const mongoose = require("mongoose");
const { Schema } = mongoose;

const panelMemberSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    studentGroup: {
        type: []
    },
});

module.exports = User = mongoose.model("panelMember", panelMemberSchema);