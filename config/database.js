const Sequelize = require('sequelize');
require('dotenv').config();

//TODO apply environment variables to hide sensitive code like passwords

module.exports = new Sequelize('es_test_db', 'root', '', 
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



/*
module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME, process.env.DB_USER_PASSWORD, 
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

*/