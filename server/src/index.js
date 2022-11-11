//desde aqui correra el servidor de nodejs y react de nuestro proyecto

const { Router } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const product = require('./models/product');

require("dotenv").config(); //para poder usar las variables de entorno
const productsRoutes = require("./routes/productRoute");

//bodyParser = require('body-parser');

//Conexion a la base de datos de mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://0.0.0.0/dbStackMern")
.then(() => console.log("MongoDB connected..."))
.catch(err => console.log(err));

// app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(bodyParser.json());
// Middleware
app.use(express.json());

productsRoutes(app);
app.listen(PORT);


//const productsRoutes = require("./routes/productRoute");






//app.use("/api", productsRoutes);
// app.use(express.urlencoded({ extended: true }));

//Rutas de la API
// app.get("/", (req, res) => {
//     res.json({ message: "Hola probando el servidor!" });
// });

// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });

//Conexion a la base de datos de mongoDB
// var MongoClient = require('mongodb').MongoClient;
// var uri = "mongodb://mfcaicedo:Caicedo10461901@ac-nz2hoin-shard-00-00.751jxx0.mongodb.net:27017,ac-nz2hoin-shard-00-01.751jxx0.mongodb.net:27017,ac-nz2hoin-shard-00-02.751jxx0.mongodb.net:27017/?ssl=true&replicaSet=atlas-w6lvwr-shard-0&authSource=admin&retryWrites=true&w=majority";
// MongoClient.connect(uri, function(err, client) {
//   const collection = client.db("dbStackMern").collection("products");
//     collection.insertOne({name: "Poker", descripcion: "para emborracharse"}, function(err, result){
//         console.log("esta en el if ")
//         if(err){
//             return console.log(err);
//         }
//         console.log("holi: ", result.ops);
//     });
//     setTimeout(() => {client.close()}, 1500)
// });


