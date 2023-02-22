const Sequelize = require('sequelize');

const connection = new Sequelize(
	process.env.DATABASE_URL || 'ec2-3-229-252-6.compute-1.amazonaws.com', {});

module.exports = connection;