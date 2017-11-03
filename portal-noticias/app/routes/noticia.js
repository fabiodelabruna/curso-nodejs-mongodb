
module.exports = function(app) {

    app.get('/noticia', function(req, res) {

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result) {
            if (!error) {
                res.render('noticias/noticia', { noticia: result[0] });
            }
        });
        
    });

};