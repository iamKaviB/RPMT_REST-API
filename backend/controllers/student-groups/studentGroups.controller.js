
const StudentGroup = require('../../models/student-groups/studentGroup.model')

const getStdGroups =async (req, res)=>{

    const groups = await StudentGroup.find()
    res.status(200).json(groups)
}

const createStdGroups = async (req, res)=>{
    if(!req.body.name){
        res.status(400)
        throw new Error('please add the name')
    }

    const group =StudentGroup.create({
        name:req.body.name
    })
res.status(200).json(group)
}

module.exports={
    getStdGroups,createStdGroups
}