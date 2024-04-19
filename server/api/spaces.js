const router = require('express').Router();
const { Space } = require('../db');


//GET all spaces
router.get('/', async(req, res, next) => {
    try {
        const spaceList = await Space.findAll();
        res.send(spaceList);
    } catch (e) {
        next(e);
    }
});

module.exports = router;