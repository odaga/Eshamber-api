'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable('Farms', {
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
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.dropTable('Farms');
  }
};
