

const express = require('express')// import express

const router = express.Router();


router.get('/', (req , res, next )=>{

    console.log("Hello");// extract data what the user send me 
    res.send ("hello express")

});

module.exports = router;