const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const Investor = require('../models/Investor');
const db = require('../../config/database');

// Turn on JSON body parsing for REST services
router.use(express.json())
// Turn on URL-encoded body parsing for REST services
router.use(express.urlencoded({ extended: true }));



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

//Retrieve investor based on id
//Get all farms from the database
router.get('/:InvestorId', (req, res, next) =>{
    Investor.findOne({
        where: {id: Investor.id}
    })
        .then( Investor => {
            console.log(Investor)
            res.status(200).send(Investor);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send(JSON.stringify(err.message));
        })
});



//Add investor to the database
router.post('/', (req, res, next) => {

    const data = {
        userName: req.body.userName,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        PhoneNumber: req.body.PhoneNumber,
        Email: req.body.Email,
        password: req.body.password,
    }
    
    Investor.create(data)
    .then(Investor => {
        //Send feedback to the client
        console.log("Investor created with ID: ", Investor.id);
        res.status(201).json({
            id: Investor.id,
            message: "Investor created succesfully"
        });
    })
    .catch(err => {
        console.log(err.message);
        res.status(400).json(err.message);
    });
    
});


//Delete Investor from the database
router.delete('/', (req, res, next) => {
    Investor.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(() => {
        //Send deletion successful message to the client
        console.log("Investor with id: ", + req.body.id + "Deleted");
        res.status(200).json({
            message: "Investor deleted",
            id: req.body.id
        });
    })
    .catch(err => {
        console.log(err.message);
        res.status(400).json(err.message);
    });
});

module.exports = router;