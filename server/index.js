const port = process.env.PORT || 3000;
const app = require('./app');
const conn = require('./db');

const init = async () => {
	await conn.syncAndSeed();
	app.listen(port, () => console.log(`listening on port ${port}`));
};

init();
