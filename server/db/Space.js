const conn = require('./connection');
const { Sequelize } = conn;

const Space = conn.define('space', {
    spaceID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    subtitle: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    blurb: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    features: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
    },
    images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
    }
});

module.exports = Space;