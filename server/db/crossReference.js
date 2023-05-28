const conn = require('./connection');
const { Sequelize } = conn;

const CrossReference = conn.define('artifactArtist', {
    artifactID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    artistID: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
});

module.exports = CrossReference;