module.exports.noticia = function(app, req, res) {
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    var queryParam = req.query;

    noticiasModel.getNoticia(queryParam, function(error, result) {
        if (!error) {
            res.render('noticias/noticia', { noticia: result[0] });
        }
    });
}

module.exports.noticias = function(app, req, res) {
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result) {
        if (!error) {
            res.render('noticias/noticias', { noticias: result });
        }
    });
}
