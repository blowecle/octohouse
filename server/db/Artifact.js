const conn = require('./connection');
const { Sequelize } = conn;

const Artifact = conn.define('artifact', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mainImage: {
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
    }
});

module.exports = Artifact;