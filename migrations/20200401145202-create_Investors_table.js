'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('Investors', {
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
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.dropTable('investors');
  }
};
