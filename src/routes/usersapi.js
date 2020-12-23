const { request } = require('express');
const express = require('express');
const { functions } = require('underscore');
const router = express.Router();
const fetch = require ('node-fetch');

router.get('/api/users/', async function(req, res){
    const datosapi = await fetch('https://jsonplaceholder.typicode.com/users'); // respuesta asincrona se debe usar metodo async await 
    const users = await datosapi.json(); // convierte los datos que vienen en un string en un json para visualizarse
    console.log(users);
    res.json(users);
});



module.exports = router;