'use strict'

var mongoose =  require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    dni:        {type: String, require: true},
    correo:     {type: String, require: true},
    nombre:     {type: String, require: true},
    password:   {type: String, require: true},
    rol:        {type: String, default:'Cliente', require: true},
});

module.exports = mongoose.model('cliente', ClienteSchema);