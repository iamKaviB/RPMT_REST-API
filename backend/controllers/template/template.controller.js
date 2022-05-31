const Template = require("../../models/template/template.model")

const multer = require('multer')
const path = require('path')

const storage  = multer.diskStorage({
    destination : (req, file , cb)=>{
        console.log("hi2")
        cb(null, 'utils/Storage')
    },
    filename : (req, file , cb)=>{
        console.log("hi1")
        cb(null, Date.now()+ path.extname(file.originalname))
    }

})

const upload = multer({storage:storage})
const uploadTemplate = async (req , res)=>{
    console.log("hi3")
    res.status(200).send({message:"upload"})
}


module.exports={
    upload, uploadTemplate
}