const conn = require('./connection');
const { Sequelize } = conn;

const Artifactartist = conn.define('artifactartist', {
    artifactID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    artistID: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
    },
});

module.exports = Artifactartist;