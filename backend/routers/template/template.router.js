const express = require('express')
const router = express.Router()
const { uploadTemplate} = require('../../controllers/template/template.controller')

router.get('/upload',uploadTemplate)


module.exports =router