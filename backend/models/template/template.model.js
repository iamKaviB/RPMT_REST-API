const mongoose = require("mongoose");
const { Schema } = mongoose;

const templateSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    groupId:{
        type:String,
        required:true
    },
    file:{
        data:Buffer,
        contentType : String,
    }
});

module.exports = mongoose.model("template", templateSchema);