'use strict';

//importamos express
const express = require('express');
const bodyParser = require('body-parser');

//Crear el servidor
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//Respuesta en json

app.listen(port, () =>{
  console.log(`API REST corriendo en http:localhost:${port}`);
})
