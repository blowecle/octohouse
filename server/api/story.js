const router = require('express').Router();
const Story = require('../db/Story');


//GET all story objects
router.get('/', async(res, next) => {
    try {
        const story = await Story.findAll();
        res.send(story)
    } catch (e) {
        next(e);
    }
});

module.exports = router;