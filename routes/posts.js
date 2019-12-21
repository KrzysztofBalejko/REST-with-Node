const express = require('express');
const Post = require('../models/Post');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Posts page');
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;