'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'movie-plus-fsalasevicius';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.correo,
        iat: moment().unix(),
        exp: moment().add(7,'days').unix()
    }

    return jwt.encode(payload,secret);
}