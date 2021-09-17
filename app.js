const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
//Middleware
app.use(bodyParser.json());
//Import routes
const postsRoute = require('./Routes/posts')
app.use('/posts', postsRoute)
//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
})



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to db'))
//Start listening to server
app.listen(3000)