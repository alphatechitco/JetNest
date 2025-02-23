const pool = require('../../../../database/dbconfig');



class Regions {
    constructor () {


    }

    async getRegions () {

       try {
        const query = 'SELECT region_id, region_name FROM regions';
        const {rows} = await pool.query(query);
        if(rows.length>0){
            return rows;
        }
       } catch (error) {
        console.error("Error Fetching Regions, ", error);
        return [];
       }
    }
}

module.exports = Regions;


