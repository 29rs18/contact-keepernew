const express =require('express');
const router =express.Router();

//@rote GET api/auth
//@desc logged a user
//@acess private
router.get('/',(req,res)=>{
  res.send('get logged in user');
});

router.post('/',(req,res)=>{
    res.send('log in user');
  });

module.exports=router;