const express = require('express')
const router = express.Router()
const {getStdGroups,
    createStdGroups,
    allocatePanelMember ,
    allocateSupervisor,
    allocateCoSupervisor} = require('../../controllers/student-groups/studentGroups.controller')

router.get('/all', getStdGroups)

router.post('/create', createStdGroups)

router.post('/allocate/panel', allocatePanelMember)

router.post('/allocate/supervisor', allocateSupervisor)

router.post('/allocate/cosupervisor', allocateCoSupervisor)

module.exports = router