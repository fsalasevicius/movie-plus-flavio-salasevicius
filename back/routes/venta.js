'use strict'

var express = require('express');
var ventaController = require('../controllers/VentaController');

var api = express.Router();
var auth = require('../middlewares/authenticate');

api.post('/compra_cliente',ventaController.compra_cliente);
api.get('/obtener_detalles_ordenes/:id',auth.auth,ventaController.obtener_detalles_ordenes);
api.post('/registro_compra',auth.auth,ventaController.registro_compra);
api.get('/obtener_ordenes/:id',auth.auth,ventaController.obtener_ordenes);
api.get('/obtener_ventas',auth.auth,ventaController.obtener_ventas);

module.exports = api;