const router = require('express').Router();
const { Artist, Post, Artifact } = require('../db');


//GET all posts and eagerly load the associated artists
router.get('/', async(req, res, next) => {
    try {
        const artistList = await Artist.findAll({
            include: {
                model: Artifact
            }
        });
        res.send(artistList)
    } catch (e) {
        next(e);
    }
});

module.exports = router;