const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
require('dotenv').config();
const db = require('../../config/database');
const Farm = require('../models/Farms');


// Turn on JSON body parsing for REST services
router.use(express.json())
// Turn on URL-encoded body parsing for REST services
router.use(express.urlencoded({ extended: true }));


//===============Definition for the routes and callback functions====================

//Get all farms from the database
router.get('/', (req, res, next) =>{
    Farm.findAll()
        .then( Farm => {
            console.log(Farm)
            res.status(200).send(Farm);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send(err.message);
        })
});


//Get all farms from the database
router.get('/:id', (req, res, next) =>{
    Farm.findOne({

    })
        .then( Farm => {
            console.log(Farm)
            res.status(200).send(Farm);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send(JSON.stringify(err.message));
        })
});



//Create new farm in the database
router.post('/', (req, res, next) => {
    Farm.create({
        FarmName: req.params.FarmName,
        FarmDescription: req.params.FarmDescription,
        FarmLocation: req.params.FarmLocation,
        FarmCrop: req.params.FarmCrop,
        FarmROI: req.params.FarmROI,
        Duration: req.params.Duration,
        Amount: req.params.Amount,
        Farmer: req.params.Farmer
    })
    .then(Farm => {
        res.status(201).send(Farm)
        console.log("Farm created with ID:", Farm.FarmId);
    })
    .catch(err => {
        console.log(err.message);
        res.status(400).json({
            message: err.message
        });
    });
});


//TODO: Add logic select which farm attribute is to be updated

//Update farm information
router.put('/', (res, req, next) => {
    Farm.update({
        //Farm information going to be updated
    },
    {
        where: {
            //Choose attribute in the database can be updated
        }
    }
    ).then(() => {
        res.status(201).send({
            message: "Farm updates sucessfully"
        });
    }).catch(err => {
        console.log(err.message);
        res.status(400).send({
            message: err.message
        })
    });
});





module.exports = router;