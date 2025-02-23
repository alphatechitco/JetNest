const {Pool} = require('pg');


const pool = new Pool({
    connectionString:process.env.CONNECTION_STRING,
    ssl:{
        rejectUnauthorized:false,
    }
})


pool.query('SELECT NOW()', (err, res) => {
    
    if(err){
        console.error("Error Executing Query, ", err.stack)
        console.log(process.env.CONNECTION_STRING)
    } else {
        console.log("Connnection Successful, ",res.rows)
    }
})

module.exports = pool