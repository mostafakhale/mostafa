const express=require('express');
const router=express.Router();
const path=require('path');
const { massage } = require('../add');
const products=[];
router.post('/massage',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
});
router.get('/add-product',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../','views','admin.html'));
    res.render('add-product',{name:'mostafa'});
    
});

router.post('/add-product',(req,res,next)=>{
    
    products.push({title:req.body.title});
    
    res.redirect('/');
});
exports.router=router;
exports.products=products

//module.exports=router;