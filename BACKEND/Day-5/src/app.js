const express = require('express');

const app = express();

app.use(express.json());

const notes = [];

// POST /notes 
app.post("/notes", (req, res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({
        message: "notes inserted"
    })
})

// GET /notes
app.get("/notes", (req, res)=>{
    res.status(200).json({notes: notes})
})

// DELETE /notes/:id
app.delete("/notes/:id", (req, res)=>{
    // delete notes[req.params.id];
    notes.splice(req.params.id, 1)
    res.status(200).json({
        message: "Notes is deleted"
    })
})

// PATCH /notes/:id
app.patch("/notes/:id", (req, res)=>{
    notes[req.params.id].description = req.body.description;

    res.status(200).json({
        message: "Noted updated successfully"
    })
})

module.exports = app;