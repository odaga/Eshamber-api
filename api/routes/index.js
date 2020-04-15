const express = require('express');
const router = express.Router();
require('dotenv').config();

// Turn on JSON body parsing for REST services
router.use(express.json())
// Turn on URL-encoded body parsing for REST services
router.use(express.urlencoded({ extended: true }));

router.get('/api', (req, res) =>{
    res.send('Welcome to the Eshamber API');
});

module.exports = router;