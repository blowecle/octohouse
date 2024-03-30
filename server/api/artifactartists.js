const router = require('express').Router();
const crossReference = require('../db/crossReference');


//GET /api/artifactartist cross-reference table
router.get('/', async(res, next) => {
    try {
        const artifactArtist = await crossReference.findAll();
        res.send(artifactArtist)
    } catch (e) {
        next(e);
    }
});

module.exports = router;