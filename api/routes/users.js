const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const Investor = require('../models/Investor');
const Farmer = require('../models/Farmer');
const db = require('../../config/database');



//=========================== Routes for the Investor =============================//

//Fetch all investors from the database
router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM Investors', (err, rows, fields) => {
        if(!err) {
            console.log(rows);
            res.status(200).send(rows);
        }
        else {
            console.log(err);
        }
    });
});

//Fetch single investor from the database
router.get('/:userId', (req, res, next) => {

   connection.query('SELECT * FROM Investors WHERE Id = ?',[req.params.userId], (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        }
   });

});

//Add an investor to the database
router.post('/', (req, res, next) => {
    id = req.params.userId;

    res.status(201).json({
        message: 'user added to database',
        id: id
    });
   
});

//Fetch a single investor from the database
router.delete('/:userId', (req, res, next) => {

    connection.query('DELETE * FROM Users WHERE userId = ?',[req.params.userId], (err, rows, fields) => {
        id = req.params.userId;
         if(!err) {
            res.status(201).json({
                message: 'user deleted user with: ' +id,
                id: id
            });
         }
         if (err) {
             console.log(err.message);
         }     
    });
 });



 //=========================== Routes for the Farmer =============================//

//Fetch all farmers from the database
router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM Users', (err, rows, fields) => {
        if(!err) {
            console.log(rows);
            res.status(200).send(rows);
        }
        else {
            console.log(err);
        }
    });
});

//Fetch single farmer from the database
router.get('/:userId', (req, res, next) => {

   connection.query('SELECT * FROM Users WHERE userId = ?',[req.params.userId], (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        }
   });

});

//Add an farmer to the database
router.post('/', (req, res, next) => {
    id = req.params.userId;

    res.status(201).json({
        message: 'user added to database',
        id: id
    });
   
});

//Fetch a single farmer from the database
router.delete('/:userId', (req, res, next) => {

    connection.query('DELETE * FROM Users WHERE userId = ?',[req.params.userId], (err, rows, fields) => {
        id = req.params.userId;
         if(!err) {
            res.status(201).json({
                message: 'user deleted user with: ' +id,
                id: id
            });
         }
         if (err) {
             console.log(err.message);
         }     
    });
 });


module.exports = router;