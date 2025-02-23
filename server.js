const express= require('express');
const path = require('path');
require('dotenv').config();

//Importing Routes
const RegionsRoute = require('./server/routes/Regions/RegionsRoute');
const AirportRoute = require('./server/routes/Airports/AirportRoute');
const UserRoute = require('./server/routes/Users/UsersRoute');
const airlineRoute = require('./server/routes/Airlines/airlineRoute');
const app = express();
app.use(express.json());

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))



app.get('/', async (req,res) => {
    res.sendFile(path.join(__dirname, 'public','index.html' ))
})

app.use('/regions', RegionsRoute);
app.use('/user', UserRoute );
app.use('/airport', AirportRoute);
app.use('/airlines', airlineRoute);

const port = 3000;

app.listen(port, () => {
    console.log("Server at 3000")
})