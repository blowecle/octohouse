const router = require('express').Router();

// "/api"
router.use('/posts', require('./posts'));
router.use('/artists', require('./artists'));
router.use('/artifacts', require('./artifacts'));

module.exports = router;