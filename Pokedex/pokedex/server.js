const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js');
const port = 3000;
// console.log('Initial set up works')

// INDEX
app.get('/', (req, res) => {
    res.render('index.ejs', { data: Pokemon });
});


// SHOW
app.get('/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});

// New
// GET /pokemon/new
// Edit
// GET /pokemon/:id/edit
// Create
// POST /pokemon
// Update
// PUT /pokemon/:id
// Destroy
// DELETE /pokemon/:id


//LISTENER
app.listen(port, () => {
    console.log('app is running on port: ', port);
}); 