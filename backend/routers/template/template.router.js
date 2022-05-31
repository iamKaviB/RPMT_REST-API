const express = require('express')
const router = express.Router()
const { upload, uploadTemplate} = require('../../controllers/template/template.controller')

router.post('/upload',upload.single("file"),uploadTemplate)


module.exports =router