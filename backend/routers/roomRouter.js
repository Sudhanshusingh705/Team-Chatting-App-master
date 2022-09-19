 const express = require('express');

 const router = express.Router();
 const Model = require('../models/roomModel');

 router.post('/add',(req,res) => {
     console.log(req.body);
     new Model(req.body).save()
     .then((result) => {
        console.log(result);
        res.json(result);
     }).catch((err) => {
       console.log(err);
        res.json(err);
     });


 })
 
 router.get('/getall',(req,res)=>{
   Model.find()
   .then((result) => {
       console.log(result);
       res.json(result);
   }).catch((err) => {
       console.log(err);
       res.json(err);
       
   });
})




 module.exports = router;








  
