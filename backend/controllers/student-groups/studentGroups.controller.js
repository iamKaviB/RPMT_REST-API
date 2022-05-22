
const StudentGroup = require('../../models/student-groups/studentGroup.model')

const getStdGroups =async (req, res)=>{

    const groups = await StudentGroup.find()
    res.status(200).json(groups)
}

const createStdGroups = async (req, res)=>{
    if(!req.body.member1Id){
        res.status(400)
        throw new Error('please Enter the Member 01 IT number')
    }
    if(!req.body.member2Id){
        res.status(400)
        throw new Error('please Enter the member 02 IT number')
    }
    if(!req.body.member3Id){
        res.status(400)
        throw new Error('please Enter the member 03 IT number')
    }
    if(!req.body.member4Id){
        res.status(400)
        throw new Error('please Enter the member 04 IT number')
    }

    const group =StudentGroup.create({
        topic:req.body.topic,
        member1Id:req.body.member1Id,
        member2Id:req.body.member2Id,
        member3Id:req.body.member3Id,
        member4Id:req.body.member4Id,
    })
res.status(200).json(group)
}

module.exports={
    getStdGroups,createStdGroups
}