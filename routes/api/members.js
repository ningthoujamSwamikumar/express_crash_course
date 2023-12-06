const express = require("express")
const members = require("../../Member")
const router = express.Router();

router.get("/", (req, res)=>{
    res.json(members);
})

router.get("/:age", (req,res)=>{
    const found = members.some(member=>member.age===parseInt(req.params.age));
    if(found){
        res.json(members.find(member=>member.age===parseInt(req.params.age)));
    }else{
        res.status(404);
        res.json({msg: "member not found!"});
    } 
})

module.exports = router