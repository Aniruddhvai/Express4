const express = require('express')//import

const bodyParser =  require ('body-parser');//import
 
const app =  express();//call express function

const adminRoutes = require('./routes/admin.js')////import router

const shopRoutes = require('./routes/shop.js')////import router



app.use(bodyParser.urlencoded({extended: false}))


app.use(adminRoutes)// use admin router
app.use(shopRoutes)// use admin router


app.use((req, res, next) =>{
    res.status(404).send('<h1>Page not found</h1>');
})//this code sets up a middleware function that will be executed when a request is made to the server and no matching route is found. It responds to such requests with a "Page not found" message and sets the HTTP status code to 404.


app.listen(4200);