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

const obtener_pelicula = async function(req,res){
    if(req.body){
        var id = req.params['id'];
        var reg = await Producto.findOne({producto:id});
        res.status(200).send({data:reg});
    }else{
        res.status(500).send({message: 'NoAccess'});
    } 
}

const actualizar_pelicula = async function(req,res){
    if(req.user){
        let id = req.params['id'];
        let data = req.body;

           let reg = await Producto.findByIdAndUpdate({_id:id},{
            nombre: data.nombre,
            descripcion: data.descripcion,
            estreno: data.estreno,
            genero: data.genero,
            duracion: data.duracion,
            elenco: data.elenco,
            clasificacion: data.clasificacion,
            img: data.img,
            stars: data.stars,
            new: data.new,
            precio: data.precio,
            cantidad:data.cantidad,
            alt:data.alt,
           });
           console.log(data)
           res.status(200).send({data:reg});
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const eliminar_pelicula = async function(req,res){
    if(req.user){
        var id = req.params['id'];

        let reg = await Producto.findByIdAndRemove({_id:id});
        res.status(200).send({data:reg});
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}
module.exports = {
    listar_productos,
    obtener_producto,
    obtener_pelicula,
    actualizar_pelicula,
    eliminar_pelicula
    
}