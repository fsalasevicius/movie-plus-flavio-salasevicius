'use strict'

var Venta = require('../models/venta');
var Dventa = require('../models/dventa');
const Carrito = require('../models/Carrito');

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

const obtener_detalles_ordenes  = async function(req,res){
    if(req.user){
        var id = req.params['id'];

        try {
            let venta = await Venta.findById({_id:id}).populate('cliente');
            let detalles = await Dventa.find({venta:venta._id}).populate('producto');
            res.status(200).send({data:venta,detalles:detalles});

        } catch (error) {
            console.log(error);
            res.status(200).send({data:undefined});
        }
        
        
        
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const registro_compra = async function(req,res){
    if(req.user){

        var data = req.body;
        var detalles = data.detalles;

        data.estado = 'Procesando';
        
        console.log(data);

        let venta = await Venta.create(data);
        
        for(var element of detalles){
            element.venta = venta._id;
            await Dventa.create(element);
            await Carrito.remove({cliente:data.cliente});
           
        }

        res.status(200).send({venta:venta});
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const obtener_ordenes  = async function(req,res){
    if(req.user){
        var id = req.params['id'];
     
        let reg = await Venta.find({cliente:id}).sort({createdAt:-1});
        res.status(200).send({data:reg});   
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

module.exports = {
    compra_cliente,
    obtener_detalles_ordenes,
    registro_compra,
    obtener_ordenes
}