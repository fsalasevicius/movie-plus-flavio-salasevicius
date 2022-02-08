'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VentaSchema = Schema({
    cliente:  {type: Schema.ObjectId, ref: 'cliente', required: true},
    id_venta: {type: String, require: true},
    subtotal: {type: Number, require: true},
    estado:   {type: String, require: true},
    obs:      {type: String, require: true},
    creado:   {type:Date, default: Date.now, require: true}
});

module.exports =  mongoose.model('venta',VentaSchema);