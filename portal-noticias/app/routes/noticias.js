
module.exports = function(app) {

    app.get('/noticias', function(req, res) {
       
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result) {
            if (!error) {
                res.render('noticias/noticias', { noticias: result });
            }
        });
        
    });

};