const express = require('express');
const router = express.Router();
const Flights = require('../../models/travel/Flights/Flights');


router.post('/submitSearch', async (req, res) => {
    try {
        const searchData = req.body;

        const flight = new Flights();
        const result = flight.
    }
})