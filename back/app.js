'use strict'

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
const { application } = require('express');
var port = process.env.port || 3030;

var cliente_route = require('./routes/cliente');
var admin_route = require('./routes/admin');
var producto_route = require('./routes/producto');
var carrito_route = require('./routes/carrito');
var venta_route = require('./routes/venta');

mongoose.connect('mongodb+srv://fsalasevicius:Coderhouse2022@movie.d0ls6.mongodb.net/test',{useUnifiedTopology: true, useNewUrlParser: true},(err, res)=>{
    if(!err){
        app.listen(port,function(){
            console.log('Servidor Funcionando en el puerto ' + port);
        })
    }else{
        console.log(err);
    }
});

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json({limit: '50mb', extended: true}));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api',cliente_route);
app.use('/api',admin_route);
app.use('/api',carrito_route);
app.use('/api',producto_route);
app.use('/api',venta_route);

module.exports = app