const Template = require("../../models/template/template.model")

const uploadTemplate = async (req , res)=>{

    res.status(200).send({message:"upload"})
}


module.exports={
    uploadTemplate
}