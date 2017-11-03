function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticia = function (callback) {
    this._connection.query('select * from noticias where id_noticia = 10', callback);
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getCincoUltimasNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
    this._connection.query('insert into noticias set ?', noticia, callback);
}

module.exports = function () {
    return NoticiasDAO;
}