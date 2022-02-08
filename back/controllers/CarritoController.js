const Carrito = require('../models/Carrito');

const agregar_carrito = async function(req,res){
    if(req.body){
        
        let data = req.body;

        let carrito_cliente = await Carrito.find({cliente:data.cliente, producto:data.producto})

        if(carrito_cliente.length == 0){
            let reg = await Carrito.create(data);
            res.status(200).send({data:reg});
        }else if(carrito_cliente.length>=1){
            res.status(200).send({data:undefined});
        }
       
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const traer_carrito = async function(req,res){
    if(req.body){
        
        let id = req.params['id'];
        let carrito_cliente = await Carrito.find({cliente:id}).populate('producto');
        
        res.status(200).send({data:carrito_cliente});

       
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}

const realizar_compra = async function(req,res){
    if(req.body){
        
        let data = req.body;

        let carrito_cliente = await Carrito.find({cliente:data.cliente, producto:data.producto})

        if(carrito_cliente.length == 0){
            let reg = await Carrito.create(data);
            res.status(200).send({data:reg});
        }else if(carrito_cliente.length>=1){
            res.status(200).send({data:undefined});
        }
       
    }else{
        res.status(500).send({message: 'NoAccess'});
    }
}



module.exports = {
    agregar_carrito,
    traer_carrito,
    realizar_compra
}