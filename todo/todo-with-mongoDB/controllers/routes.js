const express = require('express');

const tasks = require('../models/taskModel.js')

const router = express.Router();

const port = process.env.PORT || 3000;


router.get('/',(req,res)=>{
    let mytasks;
    tasks.find({},(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            mytasks = data;
        }
        res.render('index.ejs',{ 'data': mytasks});
    });
})

router.post('/todo',(req,res)=>{
    let todo = req.body.todo;
    tasks({
        task : todo
    }).save(function(err,doc){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
});

router.post('/delete',(req,res)=>{
    const id = req.body.id;

    tasks.findOneAndRemove({ _id : id},(err,doc)=>{
        res.redirect('/');
    });
});

router.post('/update',(req,res)=>{
    const id = req.body.id; 
    tasks.findOneAndUpdate( {_id : id} , {status : true },(err, doc) =>{
        res.redirect('/');
    });
})

module.exports = router;
