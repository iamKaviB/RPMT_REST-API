const express = require('express')
const router = express.Router()
const { sendRequest, showRequest ,acceptRequest} = require('../../controllers/supervisor-request/supervisorRequest.controller')

router.get('/all', showRequest)

router.post('/send', sendRequest)

router.post('/accept', acceptRequest)

module.exports = router