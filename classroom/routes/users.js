const express = require("express");
const router = express.Router();

//users
//Index users
router.get("/" , (req, res)=>{
    res.send("GET for users");        
})
//show users
router.get("/:id" , (req, res)=>{
res.send("GET for show user id");
})
// post users
router.post("/" , (req, res)=>{
    res.send("POST  for users");
})
//DELETE users
router.get("/:id" , (req, res)=>{
    res.send("DELETE for users id");
 });

 module.exports= router;