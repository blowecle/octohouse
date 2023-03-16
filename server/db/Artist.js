const conn = require('./connection');
const { Sequelize } = conn;

const Artist = conn.define('artist', {
    artistID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    company: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    social: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true,
        defaultValue: []
    },
    blurb: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    artifactID: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: true,
        defaultValue: []
    }
});

module.exports = Artist;