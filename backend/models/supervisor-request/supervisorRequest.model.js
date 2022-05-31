const mongoose = require("mongoose");
const { Schema } = mongoose;

const SupervisorRequestSchema = new Schema({
    groupId: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    supervisorId: {
        type: String,
        default:""
    },
    cosupervisorId: {
        type: String,
        default:""
    },
    supervisorStatus: {
        type: Boolean,
        default:false
    },
    cosupervisorStatus: {
        type: Boolean,
        default:false
    },


});

module.exports = mongoose.model("supervisorRequest", SupervisorRequestSchema);