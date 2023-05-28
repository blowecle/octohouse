const conn = require('./connection');
const { Sequelize } = conn;

const ArtifactArtist = conn.define('artifactArtist', {
    artifactID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    artistID: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
});

module.exports = ArtifactArtist;