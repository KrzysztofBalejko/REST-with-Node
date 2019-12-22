const express = require('express');
const Post = require('../models/Post');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Posts page');
});

router.post('/', (req, res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    // Saving to the db
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err });
    })
    

});

module.exports = router;