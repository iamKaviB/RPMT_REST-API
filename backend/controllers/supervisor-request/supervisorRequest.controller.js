const SupervisorRequest = require('../../models/supervisor-request/supervisorRequest.model')
const StudentGroups = require('../../controllers/student-groups/studentGroups.controller')

const sendRequest = async (req,res)=>{

    try {
        await SupervisorRequest.create({
            groupId: req.body.groupId,
            category: req.body.category,
            topic: req.body.topic,
            description: req.body.description
        })

        res.status(200).send({message:"request sent successfully"})
    }catch (e){
        res.status(500).send({message:"request unsuccessful"})
    }
}

const showRequest = async (req, res)=>{

    try{
        let list =await SupervisorRequest.find({ $or: [ { supervisorStatus:false}, { cosupervisorStatus: false} ] } )
        console.log(list)
        res.status(200).send(list)

    }catch (e) {
        res.status(500).send({message:"failed"})
    }
}

const acceptRequest =async (req,res) =>  {
    try{
        if(req.body.type==="supervisor"){
           await StudentGroups.allocateSupervisor({id: req.body.groupId ,  supervisorId: req.body.staffId})
            let saved = await SupervisorRequest.findOne({groupId: req.body.groupId})
            let updated =await SupervisorRequest.updateOne({ _id: saved._id},
                { $set:{supervisorId: req.body.supervisor, supervisorStatus : true}
                })
            console.log(updated)
            res.status(200).json(updated)
        }else{
            await StudentGroups.allocateCoSupervisor({id: req.body.groupId ,  supervisorId: req.body.staffId})
            let saved = await SupervisorRequest.findOne({groupId: req.body.groupId})
            let updated =await SupervisorRequest.updateOne({ _id: saved._id},
                { $set:{cosupervisorId: req.body.supervisor, cosupervisorStatus : true}
                })
            console.log(updated)
            res.status(200).json(updated)
        }
    }catch (e) {

        res.status(500).json("failed")
        
    }
}

module.exports={
    sendRequest, showRequest , acceptRequest
}