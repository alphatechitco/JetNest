
const express = require('express')
const router = express.Router();
const Airport = require('../../models/travel/Airports/Airports')




router.get('/get-airport', async(req , res) => {
    console.log("API Airport")
    try {
        const {region_id}= req.query;

        const airport = new Airport();
        const result = await airport.getAirports(region_id);

        if(result) {
            res.status(200).json({airport:result, message:"Airport Fetched"})
        } else {
            res.status(404).json({message:"No Airport Found!"})
        }
    } catch (error) {
        console.error("Error Internal Server, ", error);
        res.status(500).json({message:"Internal Server Error!"})

    }
})


module.exports = router;
