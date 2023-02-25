const router = require('express').Router();
const { Artist, Post, Artifact } = require('../db');


//GET all posts and eagerly load the associated artists
router.get('/', async(req, res, next) => {
    console.log('inside posts api')
    try {
        const postList = await Post.findAll({
            include: {
                model: Artist
            }
        });
        res.send(postList)
    } catch (e) {
        next(e);
    }
});

module.exports = router;