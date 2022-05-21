const express = require('express')
const router = express.Router()
const {getStdGroups, createStdGroups} = require('../../controllers/student-groups/studentGroups.controller')

router.get('/all', getStdGroups)

router.post('/create', createStdGroups)

module.exports = router