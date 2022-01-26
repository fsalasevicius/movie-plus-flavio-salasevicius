'use strict'

var express = require('express');
var productoController = require('../controllers/ProductoController');

var api = express.Router();
var auth = require('../middlewares/authenticate');

api.get('/listar_productos',productoController.listar_productos);
api.get('/obtener_producto/:id',[auth.auth],productoController.obtener_producto);


module.exports = api;