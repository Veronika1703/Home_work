const router=require('express').Router();
const bcrypt=require('bcrypt');
const userModel=require('../models/user');
const user = require('../models/user');

router.post('/login',(req,res)=>{
    
    const {userName,pass}=req.body;
    userModel.find({userName}).then((data)=>{
        if(data.length==0)
            return res.status(200).json({msg:"User/ Pass Not Found"});
        const hashPass=data[0].pass;
        bcrypt.compare(pass,hashPass).then((ans)=>{
            return res.status(200).json({msg:"login Successfuly"});
        })
    });
});//end point for login
router.post('/signup',(req,res)=>{

// const xxBody={
//     userName:"veronika17002@gmail.com",
//     pass:"123",
//     fullName:"Veronika Romanov",
// };
// const x=xxBody.userName;
// const y=xxBody.pass;
// const z=xxBody.fullName;
// const {x,y,z}=xxBody
// const {userName,pass,fullName}=xxBody;

const saltRounds = 10;
    const { userName, pass, fullName } = req.body;
    userModel.findOne({ userName }).then((valid) => {

        if (valid = true) {
            return res.status(500).json({ msg: "user already exists please login instead" });
        }
        else {
            bcrypt.hash(pass, saltRounds, (err, hashString) => {
                if (err) // במקרה של שגיאה נחזיר הודעה בהתאם
                {
                    return res.status(500).json({ msg: err.message });
                }
                else 
                {
                    userModel.insertMany([{ userName, pass: hashString, fullName }]).then((data) => {
                        return res.status(200).json(data)
                    });
                }
            })
        }
    });
});//end poin for signup


//end poin for signup


module.exports=router;