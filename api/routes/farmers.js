const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const Farmer = require('../models/Farmer');
const db = require('../../config/database');

// Turn on JSON body parsing for REST services
router.use(express.json())
// Turn on URL-encoded body parsing for REST services
router.use(express.urlencoded({ extended: true }));


 //=========================== Routes for the Farmer =============================//

//Get all farmers from the database
router.get('/', (req, res, next) =>{
    Farmer.findAll()
        .then( Farmer => {
            console.log(Farmer)
            res.status(200).json(Farm);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err.message);
        })
});

//Retrieve farmer based on id
router.get('/:FarmerId', (req, res, next) =>{
    Farmer.findOne({
        where: {id: req.body.FarmerId}
    })
        .then( Farmer => {
            console.log(Farmer)
            res.status(200).json(Farm);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err.message);
        })
});



//Add farmer to the database
router.post('/', (req, res, next) =>{
    const data = {
        userName: req.body.userName,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        PhoneNumber: req.body.PhoneNumber,
        Email: req.body.Email,
        Password: req.body.password,
        Exprience: req.body.Exprience
    }
    
    Farmer.create(data)
    .then(Farmer => {
        //Send feedback to the client
        console.log("Farmer created with ID: ", Farmer.id);
        res.status(201).json({
            id: Farmer.id,
            message: "Farmer created succesfully"
        });
    })
    .catch(err => {
        console.log(err.message);
        res.status(400).json(err.message);
    });
});

//Delete farmer from the database
router.delete('/', (req, res, next) => {
    Investor.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(() => {
        //Send deletion successful message to the client
        console.log("Farmer with id: ", + req.body.id + "Deleted");
        res.status(200).json({
            message: "Investor deleted",
            id: req.body.id
        });
    })
    .catch(err => {
        console.log(err.message);
        res.status(400).json(err.message);
    });
})

module.exports = router;