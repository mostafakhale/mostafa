const express=require('express');

const router=express.Router();
const path=require('path');
const addProductRouter=require('./admin')
router.use('/',(req,res,next)=>{
    const products=addProductRouter.products
  //  res.sendFile(path.join(__dirname,'../','views','shop.html'));
  res.render('shop',{products:products,name:'mostafa',layout:false});
});



module.exports=router;