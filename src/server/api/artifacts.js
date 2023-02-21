const router = require('express').Router();
const { Artist, Post, Artifact } = require('../db');


//GET all posts and eagerly load the associated artists
router.get('/', async(req, res, next) => {
    try {
        const artifactList = await Artifact.findAll();
        res.send(artifactList)
    } catch (e) {
        next(e);
    }
});

//GET Single Artifact
router.get('/artifacts/:id', async(req, res, next) => {
    try {
        const artifact = await Artifact.findByPk(req.params.id, {
            include: [{
                model: Post,
                include: Artist,
            }]
        });
        res.send(artifact);
    } catch (e) {
        next(e);
    }
})

module.exports = router;