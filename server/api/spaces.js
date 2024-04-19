const router = require('express').Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Space } = require('../db');


//GET all spaces
router.get('/', async(req, res, next) => {
    try {
        console.log('inside api')
        const spaceList = await Space.findAll();
        res.send(spaceList);
    } catch (e) {
        next(e);
    }
});

module.exports = router;