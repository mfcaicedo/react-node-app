//desde aqui correra el servidor de nodejs y react de nuestro proyecto

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//CONFIGURAR SERVER BASICO




app.get("/api", (req, res) => {
    res.json({ message: "Hola probando el servidor!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

