'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.createTable("Farms", {
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

    FarmLoaction: {
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

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,

    })
    

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

     return queryInterface.dropTable("Farms");
  }
};
