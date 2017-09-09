'use strict';

//importamos express
const express = require('express');

//Crear el servidor
const app = express();


app.listen(3000, () =>{
  console.log('API REST corriendo en http:localhost:3000');
})
