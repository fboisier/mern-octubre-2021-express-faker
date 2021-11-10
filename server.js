const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(require("./routes/usuarios.route"));
app.use(require("./routes/empresa.route"));

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen( port, () => console.log(`Escuchando en el puerto: ${port}`) );