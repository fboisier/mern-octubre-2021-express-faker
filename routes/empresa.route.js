const express = require("express");
const { obtenerEmpresa } = require("../controllers/empresa.controller");
const app = express();

app.get("/api/empresa", obtenerEmpresa);


module.exports = app;