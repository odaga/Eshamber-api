'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
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

    //createdAt: Sequelize.DATE,
   // updatedAt: Sequelize.DATE
   createdAt: {
    field: 'created_at',
    type: Sequelize.DATE,
},
updatedAt: {
    field: 'updated_at',
    type: Sequelize.DATE,
},
 
    })
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.dropTable("Farms");
  }
};
