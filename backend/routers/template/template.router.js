const express = require('express')
const router = express.Router()
const { uploadTemplate} = require('../../controllers/template/template.controller')
const multer = require("multer");


let storage = multer.memoryStorage()

let upload = multer({ storage: storage })

router.post('/upload',upload.single("file"),uploadTemplate)


module.exports =router