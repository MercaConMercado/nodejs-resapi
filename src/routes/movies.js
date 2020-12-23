const { request } = require('express');
const express = require('express');
const router = express.Router();
const movies = require('../datos.json');
const _ = require('underscore'); // libreria para recorrer un arreglo

//console.log(movies); aqui ver el json que objetos trae

/*ROUTES*/

router.get('/api/movies/', function (req, res) {

    res.json(movies);
});

router.post('/api/movies/', function (req, res) {
    //console.log(req.body);
    const { titulo, year, opinion } = req.body; // COMPROBACION DE DATOS
    if (titulo && year && opinion) {
        const id = movies.length + 1;
        const nuevodato = { ...req.body, id };
        //console.log('datos Obtenido: ', nuevodato); 
        movies.push(nuevodato);
        res.json(movies);
    } else {
        res.status(500).json({ error: 'Error al agregar dato' });
    }

});


router.put('/api/movies/:id', function (req, res) {
    const { id } = req.params;
    const { titulo, year, opinion } = req.body;
    if (titulo && year && opinion) {
        _.each(movies, function (movie, i) {
            if (movie.id == id) {
                movie.titulo = titulo;
                movie.year = year;
                movie.opinion = opinion;
            }
        });
        res.json(movies);
    } else {
        res.status(500).json({ error: 'Error al actualizar' });
    }
});



router.delete('/api/movies/:id', function (req, res) {
    const { id } = req.params;// el id referencia todo el objeto que quiero borrar 
    _.each(movies, function (movie, i) {
        if (movie.id == id) {
            movies.splice(i, 1); // metodo splice para remover 
        }
    });

    res.send(movies);
});


module.exports = router;