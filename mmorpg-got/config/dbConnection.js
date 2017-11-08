var mongo = require('mongodb');

var connMongoDB = function() {
    var db = new mongo.Db(
        'got', // nome do banco
        new mongo.Server( // parâmetros de conexão
            'localhost', // host
            '27017', // port
            {} // opções de configuração
        ),
        {} // configurações adicionais
    );

    return db;
}

module.exports = function() {
    return connMongoDB;
}