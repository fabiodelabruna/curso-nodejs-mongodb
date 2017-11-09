module.exports.cadastro = function(application, req, res) {
    res.render('cadastro',  { validacao: {}, dadosForm: {} });
}

module.exports.cadastrar = function(application, req, res) {
    var dadosForm = req.body;

    req.assert('nome', 'Nome deve ser informado').notEmpty();
    req.assert('usuario', 'Usuário deve ser informado').notEmpty();
    req.assert('senha', 'Senha deve ser informada').notEmpty();
    req.assert('casa', 'Casa deve ser selecionada').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render('cadastro', { validacao: erros, dadosForm: dadosForm });
        return;
    }

    var connection = application.config.dbConnection;
    var usuarioDao = new application.app.models.UsuarioDAO(connection);

    usuarioDao.inserir(dadosForm);

    res.send('ok');

}