
const StudentGroup = require('../../models/student-groups/studentGroup.model')
const ObjectID = require('mongodb').ObjectID

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

const allocatePanelMember  =async  (req,res)=>{

    try {

        let group = await StudentGroup.findOne({_id:req.body.id})
        console.log("here")
        console.log(req.body.panelArr)
        let updated =await StudentGroup.updateOne({ _id: ObjectID(req.body.id) },
            { $set:{panelMembersId: req.body.panelArr}
            })
        console.log(updated)
        res.status(200).json(updated)

    } catch (err){

    }

}

const allocateSupervisor  =async  (req,res)=>{

    try {

        let group = await StudentGroup.findOne({_id:req.body.id})
        let updated =await StudentGroup.updateOne({ _id: ObjectID(req.body.id) },
            { $set:{supervisorId: req.body.supervisorId, supervisorStatus : true}
            })
        console.log(updated)
        res.status(200).json(updated)

    } catch (err){

    }

}

const allocateCoSupervisor  =async  (req,res)=>{

    try {

        let group = await StudentGroup.findOne({_id:req.body.id})
        if(group.supervisorStatus===false){
            res.status(403).json({message: " you cant add co-supervisor without supervisor"})
        }else if(group.supervisorId === req.body.cosupervisorId){
            res.status(403).json({message: " supervisor cannot be the co supervisor in same group"})
        } else {
            let updated = await StudentGroup.updateOne({_id: ObjectID(req.body.id)},
                {
                    $set: {cosupervisorId: req.body.cosupervisorId, cosupervisorStatus: true}
                })
            console.log(updated)
            res.status(200).json(updated)
        }
    } catch (err){

    }

}

module.exports={
    getStdGroups,createStdGroups ,allocatePanelMember,allocateSupervisor,allocateCoSupervisor
}