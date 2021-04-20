const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))
const Pokemon = require('./models/pokemon.js');
// console.log(Pokemon)
const port = 3000;
app.use('/public', express.static('public'));
// console.log('Initial set up works')

// INDEX
app.get('/pokemon/', (req, res) => {
    // res.render('index.ejs', {data: Pokemon});
    res.render('index.ejs', {
        allPokemon: Pokemon
    })
    // console.log("this works")
});

//Middleware
// app.use((req, res, next) => {
//     console.log('I run for all routes');
//     next();
// });

// SHOW
app.get('/pokemon/:id', (req, res) => {
    // res.render('show.ejs', {data: Pokemon[req.params.id]});
    res.render('show.ejs', {
        pokemons: Pokemon[req.params.id]
    })
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