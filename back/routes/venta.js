'use strict'

var express = require('express');
var ventaController = require('../controllers/VentaController');

var api = express.Router();
var auth = require('../middlewares/authenticate');

api.post('/compra_cliente',ventaController.compra_cliente)
module.exports = api;