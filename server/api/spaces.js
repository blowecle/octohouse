const router = require('express').Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Spaces } = require('../db');


//GET all spaces
router.get('/', async(req, res, next) => {
    try {
        const spaceList = await Spaces.findAll();
        res.send(spaceList);
    } catch (e) {
        next(e);
    }
});

module.exports = router;