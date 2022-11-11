//desde aqui correra el servidor de nodejs y react de nuestro proyecto

const { Router } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const product = require('./models/product');

require("dotenv").config(); //para poder usar las variables de entorno
const productsRoutes = require("./routes/productRoute");

//Conexion a la base de datos de mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://0.0.0.0/dbStackMern")
.then(() => console.log("MongoDB connected..."))
.catch(err => console.log(err));

// Middleware
app.use(express.json());

productsRoutes(app);
app.listen(PORT);


