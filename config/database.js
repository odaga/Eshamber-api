const Sequelize = require('sequelize');

const db = new Sequelize('eshamber_db', 'admin', 'password1&PASSWORD2', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

});
module.exports = db;
