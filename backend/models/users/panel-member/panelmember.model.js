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

module.exports =mongoose.model("panelMember", panelMemberSchema);