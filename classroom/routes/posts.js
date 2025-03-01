const express= require("express");
const router = express.Router();
// posts
//Index 
 router.get("/" , (req, res)=>{
    res.send("GET for posts");        
})
//show 
router.get("/:id" , (req, res)=>{
res.send("GET for post id");
})
// post 
router.post("/" , (req, res)=>{
    res.send("POST  for post");
})
//DELETE 
router.get("/:id" , (req, res)=>{
    res.send("DELETE for posts id");
 });

 module.exports = router;