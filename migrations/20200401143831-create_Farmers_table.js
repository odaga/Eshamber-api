'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('Farmers', {
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
    //createdAt: Sequelize.DATE,
    //updatedAt: Sequelize.DATE

    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
  },
  updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE,
  },

    });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable("farmers");
  }
};
