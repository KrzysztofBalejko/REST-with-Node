const express = require('express');

const app = express();

// Routes
app.get('/', (req,res) => {
    res.send('Home page')
});

// Listening to the server
app.listen(3000);