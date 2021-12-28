'use strict'

var mongoose =  require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    nombre:     {type: String, require: true},
    apellido:   {type: String, require: true},
    correo:     {type: String, require: true},
    password:   {type: String, require: true},
    f_nac:      {type: String, require: true},
    dni:        {type: String, require: true},
});

module.exports = mongoose.model('cliente', ClienteSchema);