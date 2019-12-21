const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

const app = express();

// Importing routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


// Connecting to DB
dotenv.config();

mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('connected to db')
);


// Routes
app.get('/', (req,res) => {
    res.send('Home page');
});


// Listening to the server
app.listen(3000);