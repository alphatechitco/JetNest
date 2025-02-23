const { error } = require("winston");
const pool = require("../../../../database/dbconfig");
const bcryptjs = require('bcryptjs');


class SignFunctionality {
    constructor () {

    }

    async signup(data) {
        try {
            console.log("signUP", data)
            const {email, password, name} = data;
    
            const hashed_password = await bcryptjs.hash(password, 10);
    
            const query = 'INSERT INTO users(email, password, name) VALUES ($1,$2,$3) RETURNING user_id'
            
            const {rows} = await pool.query(query, [email,hashed_password,name]);

            if(rows.length>0) {
                return {success:true, data:rows.user_id}
            } else {
                return {success:false}
            }
    
        }  catch (error) {
            console.error("Error While Registering, ", error)
            return {success:false}

        }
    }


    async login (data) {
       try {
        console.log("Login", data)
        const {email, password} = data;

        
        const query = 'SELECT password FROM users WHERE email = $1';

        const {rows} = await pool.query(query, [email]);

        if(rows.length==0) {
            console.log("Email Not Registered")
        }

        const hashedPassword = rows[0].password;

        const isAuthenticated = await bcryptjs.compare(password,hashedPassword);

        if(!isAuthenticated) {
            console.log("Invalid Password");
            return {success:false};
        }
        return {success:true};
       } catch (error) {
        console.error("Error While Logging In, ", error);
        return {success:false}
       }
    }

}


module.exports = SignFunctionality;