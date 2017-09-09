'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//ecomerce tienda online
//API REST sobre productos

//GET todos los recursos
app.get('/api/product',(req,res) => {
  res.send(200, {products: []});
});

//GET un recurso especifico
app.get('/api/product/:productId', (req, res) => {

});

//POST subir productos
app.post('/api/product', (req,res) => {
  console.log(req.body);//acceder al cuerpo del mensaje gracias a bodyParser
  /*
  { name: 'Mac',
    prrice: '200',
    photo: 'mack.png',
    category: 'laptop' }
  */
  //res.send(200, {message: 'El producto se ha recibido'});
  res.status(200).send({message: 'El producto se ha recibido'});
});

//PUT actualizar producto
app.put('/api/product/:productId', (req, res) => {

});

//DELETE
app.delete('/api/product/:productId',(req,res) =>{

})

//Primero conectamos la bd
//el primer parametro es la bd mongodb://localhost:27017/nombre_bd
//segundo parametro callback
mongoose.connect('mongodb://localhost:27017/shop', (err, res)=>{
  if(err){
    //throw err;
    return console.log(`Error al conectar a la BD ${err}`);
  }else{
    console.log("Conexion a la BD establecida...");
    app.listen(port, () => {
      console.log(`API REST corriendo en http:localhost:${port}`);
    });
  }
});
