'use strict'

var express = require('express');
var productoController = require('../controllers/ProductoController');

var api = express.Router();
var auth = require('../middlewares/authenticate');

api.get('/listar_productos',productoController.listar_productos);
api.get('/obtener_producto/:id',[auth.auth],productoController.obtener_producto);
api.get('/obtener_pelicula/:id',[auth.auth],productoController.obtener_pelicula);
api.put('/actualizar_pelicula/:id',[auth.auth],productoController.actualizar_pelicula);
api.delete('/eliminar_pelicula/:id',auth.auth,productoController.eliminar_pelicula);
api.post('/registro_producto',[auth.auth],productoController.registro_producto);

module.exports = api;