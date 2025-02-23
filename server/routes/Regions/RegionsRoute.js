const express = require('express');
const router  =  express.Router();
const Regions = require('../../models/travel/Regions/Regions');

router.get('/get-regions', async (req, res) => {
    try {
        console.log("API Triggered");
        const regions = new Regions();
        const result = await regions.getRegions();
        if(result) {
            console.log("Result, ", result);
            res.status(200).json({regions:result, message:"Regions Fetched"})
        }
        else {
            res.status(200).json({message:"Regions Fetch Failed"})
        }
    } catch (error) {
        console.error("Error While Fetching Regions/Internal Server Error, ", error)
        res.status(500).json({ message: "Internal Server Error" });
    }
})




module.exports = router;


