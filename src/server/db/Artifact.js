const conn = require('./connection');
const { Sequelize } = conn;

const Artifact = conn.define('Artifact', {
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
        type: Sequelize.TEXT,
        allowNull: false,
        get() {
            return this.getDataValue('images').split(';');
        }
    },
    blurb: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

module.exports = Artifact;