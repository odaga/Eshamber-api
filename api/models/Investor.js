const Sequelize  = require('sequelize');

module.exports = sequelize.define("Investor", {

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
        type: Sequelize.STRING(255),
        allowNull: false
    },

    LastName: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    PhoneNumber: {
        type: Sequelize.STRING(13),
        allowNull: true,
        unique: true
        
    },

    Email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
    },

    Investment: {
        type: Sequelize.INTEGER(255),
        allowNull: true
    },

    AccountBalance: {
        type: Sequelize.INTEGER(255),
        allowNull: true
    },

    PaymentPending: {
        type: Sequelize.INTEGER(255),
        allowNull: true
    },

    FarmInvested: {
        type: Sequelize.STRING(300),
        allowNull: true
    }
    

});