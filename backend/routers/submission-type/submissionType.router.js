const express = require('express')
const router = express.Router()
const { createSubmissionType, getSubmissionTypes} = require('../../controllers/submission-type/submissionType.controller')

router.get('/all', getSubmissionTypes)

router.post('/create', createSubmissionType)

module.exports = router