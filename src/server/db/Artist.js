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
        type: Sequelize.TEXT,
        allowNull: true,
        get() {
            return this.getDataValue('social').split(';');
        }
    },
    blurb: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    images: {
        type: Sequelize.TEXT,
        allowNull: false,
        get() {
            return this.getDataValue('images').split(';');
        }
    },
    artifactID: {
        type: Sequelize.TEXT,
        allowNull: true,
        get() {
            return this.getDataValue('artifactID').split(';').map((str) => parseInt(str));
        }
    }
});

module.exports = Artist;