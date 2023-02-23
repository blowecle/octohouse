const conn = require('./connection');
const { Sequelize } = conn;

const Artist = conn.define('artist', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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
    companyLink: {
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
    images: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,
        defaultValue: []
    },
    artifactID: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true,
        defaultValue: []
    }
});

module.exports = Artist;