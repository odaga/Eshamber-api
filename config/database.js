const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME, process.env.DB_USER_PASSWORD, 
    {
        host: 'localhost', 
        dialect: 'mysql', 
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
          },
        operationAliases: false
    });

module.exports = sequelize;
global.sequelize = sequelize;
