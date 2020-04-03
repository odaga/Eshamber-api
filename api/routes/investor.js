const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const Investor = require('../models/Investor');
const db = require('../../config/database');



//=========================== Routes for the Investor =============================//


//Get all Investors from the database
router.get('/', (req, res, next) =>{
    Investor.findAll()
        .then( Investor => {
            console.log(Investor)
            res.status(200).json(Investor);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err.message);
        })
});














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

    connection.query('DELETE * FROM Investors WHERE userId = ?',[req.params.userId], (err, rows, fields) => {
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