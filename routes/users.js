const express =require('express');
const router =express.Router();

//@rote POST api/users
//@desc Register a user
//@acess PUBlic
router.post('/',(req,res)=>{
  res.send('Register a user');
});

module.exports=router;