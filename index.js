const express = require("express")
const path = require("path");
// const logger = require("./logger")
// const members = require("./Member")

const app = express();

//custom middleware
// app.use(logger);

//using built-in middleware and setting static folder
app.use(express.static(path.join(__dirname, "public")) );


app.get("/", (req, res) => {
    //res.send("Welcome to express");
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

// app.get("/members", (req, res)=>{
//     res.json(members);
// })

// app.get("/members/:age", (req,res)=>{
//     const found = members.some(member=>member.age===parseInt(req.params.age));
//     if(found){
//         res.json(members.find(member=>member.age===parseInt(req.params.age)));
//     }else{
//         res.status(404);
//         res.json({msg: "member not found!"});
//     } 
// })

//Members api routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log("server running on port ", PORT));