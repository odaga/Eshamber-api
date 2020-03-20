const express = require('express');
const router = express.Router();
const mysql = require('mysql');

//Creating connection to the mysql database 
const connection  = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
connection.connect(err => {
    if(err) {
        console.log('error connecting to database:' +err.stack);
        return;
    }
    console.log('Connected to DB as id ' + connection.threadId);
});

//Route to fetch all transactions from the database
router.get('/transactions', (req, res, next) => {
    connection.query('SELECT * FROM Transactions WHERE transactionId = ?',[req.params.transactionId], (err, rows, fields) => {
         if(!err) {
             res.send(rows);
         }
         else {
            console.log(err.message);
            throw err
        }
    });   
 
});


//Route to fetch a specific Transactions based on its id
router.get('/:transactionId', (req, res, next) => {
    connection.query('SELECT * FROM Transactions WHERE transactionId = ?',[req.params.transactionId], (err, rows, fields) => {
         if(!err) {
             res.send(rows);
         }
         else {
             console.log(err.message);
             throw err
         }
    });   
 
});

//Route to fetch a transactions performed  by a single user
router.get('/transactions/:userId', (req, res, next) => {
    connection.query('SELECT * FROM Transactions WHERE transactionId = ?',[req.params.transactionId], (err, rows, fields) => {
         if(!err) {
             res.status(200).send(rows);
         }
         else {
            console.log(err.message);
            throw err
        }
    });   
 
});





module.exports = router;