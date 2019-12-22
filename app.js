const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());

// Importing routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Connecting to DB
dotenv.config();


const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};


mongoose.connect(
    process.env.DB_CONNECT,
    options,
    () => console.log('connected to db')
);


// Routes
app.get('/', (req,res) => {
    res.send('Home page');
});


// Listening to the server
app.listen(3000);