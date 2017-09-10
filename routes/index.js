'use strict';

const express = require('express');
const productCtrl = require('../controllers/product');
const api = express.Router();//Manejo de rutas


//GET todos los recursos
api.get('/product', productCtrl.getProducts);

//GET un recurso especifico
api.get('/product/:productId', productCtrl.getProduct);

//POST subir productos
api.post('/product', productCtrl.saveProduct);

//PUT actualizar producto
api.put('/product/:productId', productCtrl.updateProduct);

//DELETE un producto
api.delete('/product/:productId', productCtrl.deleteProduct);


module.exports = api;
