const dotenv = require('dotenv');   // Load environment variables from a .env file
dotenv.config();                    // Initialize dotenv to read .env file

const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./Routes/user.routes');
const captainRoutes = require('./Routes/captain.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send('Hello World!');
});


app.use('/users', userRoutes);   
app.use('/captains', captainRoutes);

module.exports = app;