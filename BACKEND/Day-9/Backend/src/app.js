

const express = require('express');
const notesModel = require("./models/note.model");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// POST /api/notes 
// re.body = {title, description}

app.post("/api/notes", async(req, res) => {
    const { title, description } = req.body;

    const notes = await notesModel.create({
        title, description
    });

    res.status(201).json({
        message: "Notes created successfully",
        notes
    })
})

// GET /api/notes
// Fetch all notes
app.get("/api/notes", async(req, res) => {
    const notes = await notesModel.find();
    res.status(200).json({
        message: "Notes Fetched Successfully",
        notes
    });
})

// DELETE /api/notes/:id 
// delete note by id
app.delete("/api/notes/:id", async(req, res) => {
    const note = await notesModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
        message: "Note deleted successfully",
        note
    })
})

// PATCH /api/notes/:id
// update description of node by id
// req.body = {description}
app.patch("/api/notes/:id", async(req, res) => {
    const { description } = req.body;
    const note = await notesModel.findByIdAndUpdate(req.params.id, { description });

    res.status(200).json({
        message : "Note description updated successfully",
    })
})


module.exports = app;