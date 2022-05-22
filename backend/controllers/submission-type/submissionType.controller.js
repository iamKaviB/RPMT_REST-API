
const SubmissionType = require('../../models/submission-type/submissionType.model')

const getSubmissionTypes =async (req, res)=>{

    const submissionTypes = await SubmissionType.find()
    res.status(200).json(submissionTypes)
}

const createSubmissionType = async (req, res)=>{

    // if(!req.body.name){
    //     res.status(400)
    //     throw new Error('please add the name')
    // }

    const submissionType =SubmissionType.create({
        type:req.body.type
    })
    res.status(200).json(submissionType)
}

module.exports={
    getSubmissionTypes , createSubmissionType
}