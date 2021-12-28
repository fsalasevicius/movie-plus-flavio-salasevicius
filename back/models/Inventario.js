'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InventarioSchema = Schema({
    producto: {type: Schema.ObjectId, ref: 'producto', required: true},
    cantidad: {type: Number, require: true},
    creado:   {type:Date, default: Date.now, require: true}
});

module.exports =  mongoose.model('inventario',InventarioSchema);