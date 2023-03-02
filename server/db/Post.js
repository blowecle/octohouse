const conn = require('./connection');
const { Sequelize } = conn;

const Post = conn.define('post', {
    postID: {
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
		type: Sequelize.ARRAY(Sequelize.TEXT),
		allowNull: false,
	},
	content: {
		type: Sequelize.TEXT,
        allowNull: false,
	},
	artifactID: {
		type: Sequelize.INTEGER,
		allowNull: true,
	},
	artistID: {
		type: Sequelize.ARRAY(Sequelize.INTEGER),
		allowNull: true,
	}
});

module.exports = Post;