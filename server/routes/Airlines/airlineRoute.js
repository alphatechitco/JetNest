const express = require('express');
const router = express.Router();
const Airline = require('../../models/travel/Airline/airline')

router.get('/getAirlines', async (req, res) => {
    try {
        const airline = new Airline(); 
        const airlineData = await airline.getAirline();
        if(airlineData){
            res.status(200).json(airlineData);
        } else {
            req.status(404).json("No Arline Data Available")
        }
    } catch (error) {
        console.log("Error While Fetching, ",error);
        res.status(500).json("Internal Server Error!")
    }
})


module.exports = router;
