'use strict';

const mongoose = require("mongoose");
let product = require("../models/product");

product=mongoose.model('Product');

//Listar productos
exports.listProducts = function(req,res){
    product.find({}, function (err, product){
        if(err){
            res.send(err);
        }
        res.json(product);
    });
};

//Crear producto
exports.createProduct = function(req,res){
    const newProduct = new product(req.body);
    newProduct.save(function (err,product){
        if(err){
            res.send(err);
        }
        res.json(product);
    });
};

//Encontrar producto por id
exports.findById = function (req,res){
    product.findById(req.params.productId, function (err, product){
        if(err){
            res.send(err);
        }
        res.json(product);
    });
};

//Actualizar producto
exports.editProduct = function (req, res){
    product.findOneAndUpdate({_id: req.params.productId}, 
        req.body, {new:true}, function(err, product){
            if(err){
                res.send(err);
            }
            res.json(product);
    });
};

//Eliminar producto
exports.deleteProduct = function(req,res){
    product.remove({_id: req.params.productId}, function(err, product){
        if(err){
            res.send(err);
        }
        res.json({message: 'Producto eliminado correctamente'})
    });
};