'use strict'

var Venta = require('../models/venta');
var Dventa = require('../models/dventa');

const compra_cliente = async function(req,res){
    if(req.body){

        var data = reg.body;
        var detalles = data.detalles;
        var data_detalle = [];

        var venta = await Venta.create(data);

        detalles.array.forEach(async element => {
            await Dventa.create(element);
            data_detalle.push(element);
        });

        res.status(200).send({venta:venta, dventa:data_detalle});
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
    compra_cliente
}