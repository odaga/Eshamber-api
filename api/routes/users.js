const express = require('express');
const router = express.Router();
const mysql = require('mysql');

//Creating connection to the mysql database 
const connection  = mysql.createConnection({
    host: process.env.BD_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME
});
connection.connect(err => {
    if(err) {
        console.log('error connecting to database:' +err.stack);
        return;
    }
    console.log('Connected to DB as id ' + connection.threadId);
});


//Fetch all users from the database
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

//Fetch single user from the database
router.get('/:userId', (req, res, next) => {

   connection.query('SELECT * FROM Users WHERE userId = ?',[req.params.userId], (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        }
   });

});

//Add user to the database
router.post('/', (req, res, next) => {
    id = req.params.userId;

    res.status(201).json({
        message: 'user added to database',
        id: id
    });
   
});

//Fetch single user from the database
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