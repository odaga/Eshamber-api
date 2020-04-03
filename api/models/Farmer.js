const Sequelize  = require('sequelize');
const db = require('../../config/database');

const Farmer = db.define("Farmer", {

    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
    },

    userName: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
    },

    FirstName: {
        type: Sequelize.STRING(300),
        allowNull: false
    },


    LastName: {
        type: Sequelize.STRING(300),
        allowNull: false
    },

    PhoneNumber: {
        type: Sequelize.STRING(13),
        allowNull: true,
        unique: true
    },

    Email: {
        type: Sequelize.STRING(300),
        allowNull: false
    },

    Password: {
        type: Sequelize.STRING(300),
        allowNull: false
    },

    Experience: {
        type: Sequelize.STRING,
        allowNull: true
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

module.exports = Farmer;