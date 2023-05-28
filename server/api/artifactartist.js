const router = require('express').Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
import ArtifactArtist from '../db/ArtifactArtist';

//GET /api/artifactartist cross-reference table
router.get('/', async(req, res, next) => {
    try {
        const artifactArtist = await ArtifactArtist.findAll();
        res.send(artifactArtist)
    } catch (e) {
        next(e);
    }
});

module.exports = router;