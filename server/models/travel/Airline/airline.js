const pool = require("../../../../database/dbconfig");



class Airline {
    constructor () {

    }


    async getAirline() {

        const query = 'SELECT * FROM airlines'

        const {rows} = await pool.query(query);
        console.log(rows)

        if(rows.length) {
            return rows[0];
        }
    }
 }

 module.exports = Airline