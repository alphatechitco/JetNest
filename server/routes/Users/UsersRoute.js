const express = require('express');
const SignFunctionality = require('../../models/travel/users/Users');
const router = express.Router();


router.post('/signup', async (req, res) => {
    console.log("Triggered")

    try {
        const data = req.body;

        const SF = new SignFunctionality();
    
        const result = await SF.signup(data);
    
        if (!result.success) {
            return res.status(401).json({success:false,message:"Registration Failed"})
        }
    
        return res.status(200).json({success:true, })
    } catch (error) {
        return res.status(500).json({success:false, message: "Internal Server Error"});
    }
})

router.post('/login', async (req, res) => {
    console.log("Triggered")
    try {
        const data = req.body;
        console.log("Router Data, ", data)
        const SF = new SignFunctionality();
        const result = await SF.login(data);
    
        if(!result.success) {
            return res.status(401).json({success:false, message: "Error While Signin"})
        }
        return res.status(200).json({success:true, message: "Login Success"})
    
    
    } catch (error) {
        console.log("Internal Server Error");
        return res.status(500).json({success:false, message:"Internal Server Error"})
    }

})


module.exports = router;

