const router = require('express').Router();

// "/api"
router.use('/', require('./artifacts'));
router.use('/story', require('./story'));
router.use('/posts', require('./posts'));
router.use('/artists', require('./artists'));
router.use('/artifactartist', require('./artifactartists'));
router.use('/events', require('./spaces'));


router.use((req, res, next) => {
	const err = new Error('API route not found!');
	err.status = 404;
	next(err);
});

module.exports = router;