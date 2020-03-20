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


//Definition for the routes and callback functions
router.get('/', (req, res, next) => {
    connection.query('SELECT * FROM Farms', (err, rows, fields) => {
        if(!err) {
            console.log(rows);
            res.status(200).send(rows);
        }
        else {
            console.log(err.message);
            throw err
        }

    });

});

//Route to fetch a specific farm based on its id
router.get('/:farmId', (req, res, next) => {
    connection.query('SELECT * FROM Farms WHERE farmId = ?',[req.params.farmId], (err, rows, fields) => {
         if(!err) {
             res.status(200).send(rows);
             if(rows.empty) {

             }
         }
         else {
            console.log(err.message);
            throw err
        }
    });
    
 
});


//Route to add farm to the database
router.post('/', (req, res, next) => {
   
    const FarmId = req.params.farmId;
    const FarmName = req.params.FarmName;
    const FarmDescription = req.params.FarmDescription;
    const Amount = req.params.Amount;
    const ROI = req.params.ROI;

    res.status(201).json({
        message: 'You just posted an farm with',
        Farm: {
            FarmId: req.params.FarmId,
            FarmName: req.params.FarmName,
            FarmDescription: req.params.FarmDescription,
            Amount: req.params.Amount,
            ROI: req.params.ROI
        }
    });
});

//Route to DELETE a specific farm based on its id
router.delete('/:farmId', (req, res, next) => {
    connection.query('DELETE FROM Farms WHERE farmId = ?',[req.params.farmId], (err, rows, fields) => {
         if(!err) {
             res.send('Farm has deleted successfully.');
         }
         else {
            console.log(err);
            throw err
        }
    });
 
 });

module.exports = router;