const router = require('express').Router();

// "/api"
router.use('/posts', require('./posts'));
router.use('/artists', require('./artists'));
router.use('/artifacts', require('./artifacts'));


router.use((req, res, next) => {
	const err = new Error('API route not found!');
	err.status = 404;
	next(err);
});

module.exports = router;