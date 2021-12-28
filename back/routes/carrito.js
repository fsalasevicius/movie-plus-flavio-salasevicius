'use strict'

var express = require('express');
var carritoController = require('../controllers/CarritoController');

var api = express.Router();
var auth = require('../middlewares/authenticate');

api.post('/agregar_carrito', carritoController.agregar_carrito);
api.get('/traer_carrito/:id',carritoController.traer_carrito);

module.exports = api;