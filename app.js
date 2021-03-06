const express = require('express');
const app = express();
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./config/database');


//Send request to respective route files
const indexRoute = require('./api/routes/index');
const farmRoutes = require('./api/routes/farms');
const userRoutes = require('./api/routes/users')

//Setting up middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes which should handle requests
app.use('/', indexRoute);
app.use('/farms', farmRoutes);
app.use('/users', userRoutes);


//MYSQL database connection with Sequelize ORM
db.authenticate()
    .then(() => {
        console.log('DB connection successful');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    

//Handling Cross Origin Resource Sharing (CORS) errors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-requested-With, Content-Type, Accept, Authorization");

    if (req.method === 'OPTIONS'){
        res.header('Access-Control_allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next(error); //Always call the next method so that other routes can take over
});


//Error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;