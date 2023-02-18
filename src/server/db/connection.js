const Sequelize = require('sequelize');

const connection = new Sequelize(
	process.env.DATABASE_URL || 'postgres://localhost/octohouse', {});

module.exports = connection;