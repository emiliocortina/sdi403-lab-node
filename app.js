//Modulos
var express = require('express');
var app = express();

// Variables
app.set('port', 8081);

require("./routes/rusuarios")(app);
require("./routes/rcanciones.js")(app);

// lanzarel servidor
app.listen(app.get('port'), function() {
    console.log("Servidor activo");
});