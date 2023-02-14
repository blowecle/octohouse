const router = require('express').Router();
const { Artist, Post, Artifact } = require('../db');


//GET all posts and eagerly load the associated artists
router.get('/', async(req, res, next) => {
    try {
        const artifactList = await Artifact.findAll({
            include: {
                model: Artist
            }
        });
        res.send(artifactList)
    } catch (e) {
        next(e);
    }
});

module.exports = router;