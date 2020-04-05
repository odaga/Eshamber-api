const Sequelize  = require('sequelize');
const db = require('../../config/database');

const Farm = db.define("Farm", {

    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
    },

    FarmName: Sequelize.STRING(300),

    FarmDescription: {
        type: Sequelize.STRING(300),
        allowNull: false
    },

    FarmLocation: {
        type: Sequelize.STRING(300),
        allowNull: false
    },

    FarmCrop: {
        type: Sequelize.STRING(300),
        allowNull: false
    },

    FarmROI: {
        type: Sequelize.INTEGER,
        allowNull: false

    },

   Duration: {
       type: Sequelize.INTEGER,
       allowNull: false
   },

    Amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    Farmer: {
        type: Sequelize.STRING(300),
        allowNull: false
    },

    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    },
});

module.exports  = Farm;