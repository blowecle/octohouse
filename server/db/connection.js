const Sequelize = require('sequelize');

const connection = new Sequelize(
	process.env.DATABASE_URL || 'postgres://localhost/octohouse', {
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			}
		}
	}
);

module.exports = connection;