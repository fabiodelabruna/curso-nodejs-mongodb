module.exports.startChat = function (application, req, res) {
    
    var dadosForm = req.body;

    req.assert('apelido', 'Você deve informar um nome ou apelido.').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres.').len(3, 15);

    erros = req.validationErrors();

    if (erros) {
        res.render('index', { validacao: erros });
        return;
    }

    application.get('io').emit(
        'msgParaCliente',
        {
            apelido: dadosForm.apelido,
            mensagem: 'Acabou de entrar no chat!'
        }
    );

    res.render('chat', { dadosForm: dadosForm });
};