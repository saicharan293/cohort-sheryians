const express = require('express');

const app = express();

app.use(express.json());

let notes = [];

app.post("/notes",(req, res)=>{
    notes.push(req.body);
    res.send("first api");
})

app.get("/notes",(req, res)=>{
    console.log(notes);
    res.send(notes);
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})