const pool = require("../../../../database/dbconfig");



class Airport {
    constructor () {
        
    }



    async getAirports (region_id) {

       try {

        const query = 'SELECT airport_id, airport_name, airport_iata FROM airports WHERE region_id = $1';
        const {rows} = await pool.query(query, [region_id])

        if(rows.length>0){
            return rows;
        }

       } catch (error) {
        console.error("Error While Fetching Airports, ", error)
       }
    }
}


module.exports = Airport;