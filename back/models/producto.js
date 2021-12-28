'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
    nombre:        {type: String, required: true},
    descripcion:   {type: String, required: true},
    estreno:       {type: String, required: true},
    genero:        {type: String, required: true},
    duracion:      {type: String, required: true},
    elenco:        {type: String, required: true},
    clasificacion: {type: String, required: true},
    img:           {type: String, required: true},
    stars:         {type: String, required: true},
    new:           {type: String, required: true},
    precio:        {type: Number, default: 0, required: true},
    cantidad:      {type: String, required: true},
    alt:           {type: String, required: true},
    creado:        {type:Date, default: Date.now, require: true}
});

module.exports =  mongoose.model('producto',ProductoSchema);