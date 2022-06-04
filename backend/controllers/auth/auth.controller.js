const User = require('../../models/users/user.model')
const Student = require('../../models/users/student/student.model')
const Staff = require('../../models/users/staff/staff.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const dotenv = require('dotenv').config()


const signup = async  (req, res)=>{

    try {
        let { fname, lname, role, email, password } = req.body;

        let user = new User({
            fname,
            lname,
            role,
            email,
            password,
        });



        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
         let saveduser = await user.save();
         let id = saveduser._id.toString()

        if(role==="STUDENT"){

            let userId = id
            let {studentId,  batch , group  } = req.body;
            let student = new Student({
                userId,
                studentId,
                group,
                batch
            })

            await student.save()
            res.status(200).send("Student has been save Successfully");
        }

        if(role==="STAFF"){
            let userId = id

            let staff = new Staff({
                userId,
            })

            await staff.save()
            res.status(200).send("Staff member has been save Successfully");
        }

        res.status(200).send("User has been save Successfully");
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const signin = async ( req, res)=>{

    try {
        console.log(req)
        let user = await User.findOne({ email: req.body.email });


        if (!user) {
            return res.status(400).send("Invalid email or password1");
        } else {

            console.log(req.body)
            const isValidPassword = await bcrypt.compare(
                req.body.password,
                user.password,
            );
            if (!isValidPassword) {
                return res.status(400).send("Invalid email or password2");
            }

            let student =""
            if(user.role === "STUDENT"){
                 student = await Student.findOne({userId:user._id})


            }

            console.log(user, process.env.JWT_SECRET)
            const token = jwt.sign({ _id: user._id , role : user.role}, process.env.JWT_SECRET, { expiresIn: '1800s' });
            console.log('ji')
            return res.status(200).send({"jwtheader":token , role: user.role , group:student.groupId });
        }
    } catch (err) {}


}

module.exports={
    signup ,signin
}