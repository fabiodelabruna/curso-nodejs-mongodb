module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', function(req, res) {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', function(req, res) {
        var moment = require('moment');
        var noticia = req.body;

        console.log(noticia);

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter eentre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('noticia', 'Notícia é obrigatório').notEmpty();

        // Cria um objeto JSON que vai conter as mensagens de erro dos campos
        var validationErrors = req.validationErrors();

        var isValidDate = moment(noticia.data, "YYYY-MM-DD").isValid();

        // Se a data não é válida acrescenta no JSON de validationErros a mensagem
        // de erro pois ele retornará para o formulário para mostrar o que houve
        if (!isValidDate) {
            validationErrors.push({
                location: 'body',
                param: 'data',
                msg: 'A data da notícia deve estar no formato DD/MM/AAAA',
                value: ''
            });
        }

        if (validationErrors) {
            res.render('admin/form_add_noticia');
            return;
        }

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result) {
            if (!error) {
                // redireciona para a rota de notícias
                res.redirect('/noticias');
            }
        });
    });
};