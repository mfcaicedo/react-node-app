
module.exports= function (app){
    const product = require('../controllers/productController');

    //RUTAS
    app.route('/products')
    .get(product.listProducts)
    .post(product.createProduct);

    app.route('/products/:productId')
    .get(product.findById)
    .put(product.editProduct)
    .delete(product.deleteProduct);
};

/*
const express = require("express");
const router = express.Router();
const productSchema = require("../models/product");

// Product Model - CRUD
//Crear un nuevo producto
router.post("/products", (req, res) => {
    const newProduct = new productSchema({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        image: req.body.image,
        category: req.body.category,
    });
    newProduct
    .save() //guarda el producto en la base de datos
    .then(product => res.json(product))
    .catch(err => console.log(err));
});

module.exports = router;

*/