const express = require('express');

const app = express();

app.use(express.json());

let notes = [];

// POST /notes
app.post("/notes", (req, res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.send("Notes created")
})


// GET /notes 
app.get("/notes", (req, res)=>{
    res.send(notes)
})

// DELETE /notes 
// params 
app.delete("/notes/:idx", (req, res)=>{
    // delete notes[req.params.idx]
    notes.splice(req.params.idx, 1)
    res.send("Notes deleted successfully")
})

// PATCH /notes/:idx 
// req.body = {description: "sample modified description"} 
app.patch("/notes/:idx", (req, res)=>{
    notes[req.params.idx].description = req.body.description;
    res.send("Note updated successfully");
})

module.exports = app;