const express = require("express");
const { getUsuarios, crearUsuario, getUsuario, actualizarUsuario, eliminarUsuario } = require("../controllers/usuario.controller");
const app = express();

app.get("/api/users", getUsuarios);
app.post("/api/users",crearUsuario);
app.get("/api/users/:id", getUsuario);
app.put("/api/users/:id",actualizarUsuario);
app.delete("/api/users/:id", eliminarUsuario);

module.exports = app;