const router = require('express').Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const crossReference = require('../db/crossReference');


//GET /api/artifactartist cross-reference table
router.get('/', async(req, res, next) => {
    try {
        const artifactArtist = await crossReference.findAll();
        res.send(artifactArtist)
    } catch (e) {
        next(e);
    }
});

module.exports = router;