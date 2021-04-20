const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))
const Pokemon = require('./models/pokemon.js');
// console.log(Pokemon)
const port = 3000;
app.use('/public', express.static('public'));

// console.log('Initial set up works')

//Middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// INDEX
app.get('/pokemon/', (req, res) => {
    // res.render('index.ejs', {data: Pokemon});
    res.render('index.ejs', {
        allPokemon: Pokemon
    })
    // console.log("this works")
});

// SHOW
app.get('/pokemon/:id', (req, res) => {
    // res.render('show.ejs', {data: Pokemon[req.params.id]});
    res.render('show.ejs', {
        pokemons: Pokemon[req.params.id]
    })
});

//CREATE
// GET /pokemon/new
// app.get('/pokemon/new', (req, res)=>{
//         console.log('Create route accessed!')
//         res.render('new.ejs')
// })
// POST /pokemon
// app.post('/pokemon/', (req, res)=>{
//     console.log('Create post accessed!')
//     pokemon.push(req.body)
//     res.send(req.body)
// })

//UPDATE
// PUT /pokemon/:id
app.put('/pokemon/:id', (req, res) => { 
	Pokemon[req.params.id] = req.body 
	res.redirect('/pokemon/'); 
    console.log('edit worked')
})

// GET  /pokemon/:id/edit
app.get('/pokemon/:id/edit', (req, res)=>{
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
            pokemons: Pokemon[req.params.id], //the pokemon object
			id: req.params.id //... and its index in the array
		}
	)
    // console.log('first part worked')
})

//DESTROY]
// DELETE /pokemon/:id
app.delete('/pokemon/:id', (req, res) => {
    const id = req.params.id
    const PokemonDel = Pokemon.findIndex(p => p.id == id);
    Pokemon.splice(PokemonDel, 1);
    return res.send();
});



//LISTENER
app.listen(port, () => {
    console.log('app is running on port: ', port);
}); 