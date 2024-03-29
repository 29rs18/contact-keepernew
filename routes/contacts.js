const express =require('express');
const router =express.Router();


router.get('/',(req,res)=>{
  res.send('get all contacts of user');
});


router.post('/',(req,res)=>{
    res.send('add  contact');
  });

router.put('/:id',(req,res)=>{
    res.send('update contact');
  });

  router.delete('/:id',(req,res)=>{
    res.send('delete contact');
  });  

  
module.exports=router;