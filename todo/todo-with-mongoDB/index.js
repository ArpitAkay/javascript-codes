const express = require('express');

const mongoose = require('mongoose');

const uri = require('./config/mongoURI.js');

const bodyparser = require('body-parser');

const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended : true}));
app.set('view engine','ejs');

//connection to mongoose
mongoose.connect(uri ,{}).then(() =>{
    console.log('Successfully Connected!');
})





app.use('/',require(path.join(__dirname,'./controllers/routes.js')))



app.listen(port,()=>{
    console.log('Server is listening on port',port);
});