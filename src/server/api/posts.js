const router = require('express').Router();
const { Artist, Post, Artifact } = require('../db');


//GET all posts and eagerly load the associated artists
router.get('/', async(req, res, next) => {
    try {
        const bookList = await Post.findAll({
            include: {
                model: Artist
            }
        });
        res.send(bookList)
    } catch (e) {
        next(e);
    }
});

module.exports = router;