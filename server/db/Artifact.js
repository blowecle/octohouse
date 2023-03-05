const conn = require('./connection');
const { Sequelize } = conn;

const Artifact = conn.define('artifact', {
    artifactID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    images: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
    },
    blurb: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    artistID: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
    },
    artistDescription: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
    }
});

module.exports = Artifact;