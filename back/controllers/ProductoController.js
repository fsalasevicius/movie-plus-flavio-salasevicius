'use strict'

var Producto = require('../models/producto');


const listar_productos = async function(req,res){
    if(req.body){
        var reg = await Producto.find();
        res.status(200).send({data:reg});
    }else{
        res.status(500).send({message: 'NoAccess'});
    } 
}

const obtener_producto = async function(req,res){
    if(req.body){
        var id = req.params['id'];
        var reg = await Producto.findOne({producto:id});
        res.status(200).send({data:reg});
    }else{
        res.status(500).send({message: 'NoAccess'});
    } 
}

module.exports = {
    listar_productos,
    obtener_producto,
}