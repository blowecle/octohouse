const router = require('express').Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Artist, Artifact } = require('../db');

//GET /api/artifacts all artifacts
router.get('/', async(req, res, next) => {
    try {
        const artifactList = await Artifact.findAll();
        res.send(artifactList)
    } catch (e) {
        next(e);
    }
});

//GET /api/artifacts/:id single artifact and all associated artists
router.get('/artifacts/:id', async(req, res, next) => {
    try {
        const artifact = await Artifact.findAll({
            where: {
                artifactID: req.params.id
            }
        });
        const artists = await Artist.findAll({
            where: {
                artifactID: {
                    [Op.contains]: [req.params.id]
                }
            }
        });
        res.send({artifact, artists});
    } catch (e) {
        next(e);
    }
})

module.exports = router;