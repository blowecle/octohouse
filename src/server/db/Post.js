const conn = require('./connection');
const { Sequelize } = conn;

const Post = conn.define('post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
	title: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	date: {
		type: Sequelize.STRING,
        allowNull: false,
	},
	images: {
		type: Sequelize.TEXT,
		allowNull: false,
        get() {
            return this.getDataValue('images').split(';');
        }
	},
	content: {
		type: Sequelize.TEXT,
        allowNull: false,
	},
	artifactID: {
		type: Sequelize.INTEGER,
		allowNull: true,
	},
});

module.exports = Post;