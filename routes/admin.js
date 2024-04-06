const express = require('express')// import express

const router = express.Router();


router.get('/add-product', (req , res, next )=>{
    
    //the submiited data will be sent to /product route
    res.send('<form action = "/product" method= "POST"><input type " text" name ="tittle"><input type="number"  name="productSize" ><button type ="submit">Add Product</button></form>')
});

router.post('/product', (req , res, next )=>{

    // sending response from here
    console.log(req.body);// extract data what the user send me 

    res.redirect('/');
});

module.exports = router;