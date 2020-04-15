const Sequelize =require('sequelize');
const db = require('../config/database');

const Farm = db.define('Farm', {

    Id: {
        type: Sequelize.INTEGER,
        PrimaryKey: true,
        allowNull: false,
        unique: true
    },

    FarmName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    FarmDescription:  {
        type: Sequelize.STRING,
        allowNull: false
    },

    FarmLocation: {
        type: Sequelize.STRING,
        allowNull: false
    },

    FarmCrop: {
        type: Sequelize.STRING
    },

    FarmROI: {
        type: Sequelize.INTEGER
    },

    Duration: {
        type: Sequelize.STRING
    },

    Amount: {
        type: Sequelize.INTEGER
    },

    Farmer: {
        type: Sequelize.STRING,
        allowNull: false
    },

    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    }

});

module.exports = Farm;