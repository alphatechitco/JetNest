const pool = require("../../../../database/dbconfig")



class Regions {
    constructor () {

    }


    async getRegions () {
        try {
            const query = 'SELECT region_id, region_name FROM regions'
            const {rows} = await pool.query(query);



            if (rows.length) {
                return rows;
            }

    } catch (error) {
        console.error("Error In Getting Regions")
        return {error:true}
    }

}
}

module.exports = Regions;

