const Sequelize = require('sequelize');

const config = {};

if (process.env.QUIET) {
	config.logging = false;
}

//you name this whatever your project is
const connection = new Sequelize(
	process.env.DATABASE_URL || 'postgres://mfbvinptdryhxd:86c4d257e150a21691fdf8a645025fe3f8faabb07a9a56eb4c37d394291d3ffa@ec2-3-229-252-6.compute-1.amazonaws.com:5432/dakbufup5id0be',
	// process.env.DATABASE_URL || 'postgres://localhost/octohouse',
    config
);

module.exports = connection;