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
router.get('/:FarmId', (req, res, next) =>{
    Farm.findOne({
        where: {id: Farm.id}
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
    const data = {
        FarmName: req.body.FarmName,
        FarmDescription: req.body.FarmDescription,
        FarmLocation: req.body.FarmLocation,
        FarmCrop: req.body.FarmCrop,
        FarmROI: req.body.FarmROI,
        Duration: req.body.Duration,
        Amount: req.body.Amount,
        Farmer: req.body.Farmer
    }

    Farm.create(data)
    .then(Farm => {
        res.status(201).send(Farm)
        console.log("Farm created with ID:", Farm.id);
    })
    .catch(err => {
        console.log(err.message);
        res.status(400).json({
            message: err.message
        });
    });
});


//Delete Farm from the database
router.delete('/', (req, res, next) => {
    Farm.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(() => {
        //Send deletion successful message to the client
        console.log("Farm deleted with ID: ", +req.body.id);
        res.status(200).json({
            message: "Farm deleted",
            id: req.body.id
        });
    })
    .catch(err => {
        console.log(err.message);
        res.status(400).json(err.message);
    });
})


//TODO: Add logic select which farm attribute is to be updated
/*
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

*/





module.exports = router;