const router = require('express').Router();
const { Artist, Post, Artifact } = require('../db');


//GET all artists and eagerly load the artist model
router.get('/', async(req, res, next) => {
    try {
        const artistList = await Artist.findAll();
        res.send(artistList)
    } catch (e) {
        next(e);
    }
});

//GET single artist data and eagerly load the artifact model
router.get('/:id', async(req, res, next) => {
    try {
        const artistData = await Artist.findByPk(req.params.id, {
            include: {
                model: Artifact
            }
        })
        res.send(artistData)
    } catch(e) {
        next(e);
    }
})

module.exports = router;