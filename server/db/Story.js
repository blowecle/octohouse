const conn = require('./connection');
const { Sequelize } = conn;

const Story = conn.define('story', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    position: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    animation: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 6,
        },
        size: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }
});

module.exports = Story;