const User = require('../../models/users/user.model')
const bcrypt = require('bcrypt')


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

        if(role=="STUDENT"){
            
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        res.status(200).send("User has been save Successfully");
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports={
    signup
}