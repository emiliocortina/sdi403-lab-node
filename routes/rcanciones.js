module.exports = function(app) {
    app.get("/canciones/:id", function(req, res) {
        var respuesta = 'id: ' + req.params.id;
        res.send(respuesta);
    });

    app.get("/canciones/:genero/:id/", function(req, res) {
        var respuesta = 'id: ' + req.params.id + "<br>"
            + "Genero: " + req.params.genero;
        res.send(respuesta);
    });

    app.post("/cancion", function(req, res) {
        res.send("Canción agregada: "+req.body.nombre +"<br>"
            +" genero: " +req.body.genero +"<br>"
            +" precio: "+req.body.precio);
    });

    app.get('/promo*', function (req, res) {
        res.send('Respuesta patrón promo* ');
    })

}