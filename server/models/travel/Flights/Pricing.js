
const axios = require('axios');


class Pricing {
    constructor () {

    }

    async getFlights() {

        /*axios.get("https://api.flightapi.io/onewaytrip/677ea910dfe82f1479ce06ff/LHE/DXB/2025-01-09/1/0/0/Business/USD")
        .then(response => { console.log("Response")
            console.log("itineraries[].id", response.data.itineraries)
            console.log("Route ", response.data.legs.origin, response.data.legs.destination)
            console.log("Date", response.data.legs.date)
            console.log("itineraries[].pricing_options[].price.amount, ", response.data.itineraries.pricing_options.price.amount)
            console.log(response.data.segments.origin, response.data.segments.destination)
            console.log(response.data.pricing_options.items.url)
            console.log(response.data.pricing_options.agent_ids)
    })
        .catch(error => console.error(error));


        */

        const sql = 'SELECT * FROM flights WHERE '
    }
}

const pr = new Pricing();
pr.getFlights()

module.exports = Pricing;
