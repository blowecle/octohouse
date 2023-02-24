const router = require('express').Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Artist, Post, Artifact } = require('../db');


//GET /api/ all artifacts
router.get('/', async(req, res, next) => {
    try {
        const artifactList = await Artifact.findAll();
        res.send(artifactList)
    } catch (e) {
        next(e);
    }
});

router.get('/:id', async(req, res, next) => {
    try {
        const artifact = await Artifact.findByPk(req.params.id);
        const artists = await Artist.findAll();
        res.send({artifact, artists});
    } catch (e) {
        next(e);
    }
})

module.exports = router;

//GET /api/artifacts/:id Single artifact and eagerly load associated artists
// router.get('/artifacts/:id', async(req, res, next) => {
//     try {
//         const artifact = await Artifact.findByPk(req.params.id);
//         console.log("INSIDE /API/artifacts/:id, ID: ", req.params.id)
//         const artists = await Artist.findAll({
//             where: {
//                 artistId: {
//                     [Op.in]: req.params.id
//                 }
//             }
//         })
//         res.send(artifact, artists);
//     } catch (e) {
//         next(e);
//     }
// })