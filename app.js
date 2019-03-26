//Modulos
var express = require('express');
var app = express();

var expressSession = require('express-session');
app.use(expressSession({
    secret: 'abcdefg',
    resave: true,
    saveUninitialized: true
}));

var crypto = require('crypto');

var fileUpload = require('express-fileupload');
app.use(fileUpload());

var swig = require('swig');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
var mongo = require('mongodb');

// Variables
app.set('port', 8081);
app.set('db', 'mongodb://admin:sdi@tiendamusica-shard-00-00-ri6vu.mongodb.net:27017,tiendamusica-shard-00-01-ri6vu.mongodb.net:27017,tiendamusica-shard-00-02-ri6vu.mongodb.net:27017/test?ssl=true&replicaSet=tiendamusica-shard-0&authSource=admin&retryWrites=true');
app.set('clave','abcdefg');
app.set('crypto',crypto);

var gestorBD = require("./modules/gestorBD.js");
gestorBD.init(app,mongo);

require("./routes/rusuarios")(app, swig, gestorBD);
require("./routes/rcanciones.js")(app, swig, gestorBD);

// lanzarel servidor
app.listen(app.get('port'), function() {
    console.log("Servidor activo");
});