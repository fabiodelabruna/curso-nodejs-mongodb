function UsuarioDAO(connection) {
    this._connection = connection();
}

UsuarioDAO.prototype.inserir = function(usuario) {
    this._connection.open(function(err, mongoClient) {
        mongoClient.collection('usuario', function(err, collection) {
            collection.insert(usuario);
            mongoClient.close();
        });
    });
}

module.exports = function() {
    return UsuarioDAO;
}