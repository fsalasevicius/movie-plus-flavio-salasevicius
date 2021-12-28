'use strict'

var Admin = require('../models/admin');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/jwt');

const registro_admin = async function(req,res){
    var data = req.body;
    var admin_arr = [];

    admin_arr = await Admin.find({dni:data.dni});

    if(admin_arr.length !=0){
        res.status(200).send({mensaje:'El Administrador ya existe en la base de datos.', data : undefined});  
    }else{   
        if(data.password){
            bcrypt.hash(data.password,null,null, async function(err,hash){
                if(hash){
                    data.password = hash;
                    var reg = await Admin.create(data);
                    res.status(200).send({data:reg});
                }else{
                    es.status(200).send({mensaje:'Error del Servidor', data : undefined});
                }
            })
        }else{
            res.status(200).send({mensaje:'La contraseña esta vacia', data : undefined});
        }
        res.status(200).send({mensaje:reg});
    }
}

const login_admin = async function(req,res){
    var data = req.body;
    var admin_arr = [];

    admin_arr = await Admin.find({dni:data.dni});

    if(admin_arr.length  != 0){
        let user = admin_arr[0];
        bcrypt.compare(data.password,user.password, async function(error,check){
            if(check){
                    res.status(200).send({
                        data : user,
                        token: jwt.createToken(user)                    
                    });
            }else{
                    res.status(200).send({mensaje:'La contraseña no coincide', data : undefined});
            }
        });
    }
}

module.exports = {
    registro_admin,
    login_admin,
}