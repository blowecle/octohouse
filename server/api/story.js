const router = require('express').Router();
const { Story } = require('../db');


//GET all posts and eagerly load the associated artists
router.get('/', async(req, res, next) => {
    try {
        const story = await Story.findAll();
        res.send(story)
    } catch (e) {
        next(e);
    }
});

module.exports = router;