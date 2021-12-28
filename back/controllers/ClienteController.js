'use strict'

var Cliente = require('../models/cliente');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/jwt');

const registro_cliente = async function(req,res){
    var data = req.body;
    var cliente_arr = [];

    cliente_arr = await Cliente.find({dni:data.dni});

    if(cliente_arr.length !=0){
        res.status(200).send({mensaje:'El cliente ya existe en la base de datos.', data : undefined});  
    }else{   
        if(data.password){
            bcrypt.hash(data.password,null,null, async function(err,hash){
                if(hash){
                    data.password = hash;
                    var reg = await Cliente.create(data);
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

const login_cliente = async function(req,res){
    var data = req.body;
    var cliente_arr = [];

    cliente_arr = await Cliente.find({dni:data.dni});

    if(cliente_arr.length  != 0){
        let user = cliente_arr[0];
        bcrypt.compare(data.password,user.password, async function(error,check){
            if(check){
                res.status(200).send({
                    data : user,
                    token: jwt.createToken(user)                    
                });
        }else{
                    res.status(200).send({message:'La contraseña no coincide', data : undefined});
            }
        });
    }
}

const obtener_cliente = async function(req,res){
    if(req.body){
        
        var id = req.params['id'];
        
        try {
            var reg = await Cliente.findById({_id:id});

            res.status(200).send({data:reg});
            
        } catch (error) {
            res.status(200).send({data:undefined});
        }
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

module.exports = {
    registro_cliente,
    login_cliente,
    obtener_cliente,
}