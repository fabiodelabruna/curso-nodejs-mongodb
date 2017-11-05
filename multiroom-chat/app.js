var app = require('./config/server');

var server = app.listen(8000, function () {
    console.log('Servidor online...');
});

var io = require('socket.io').listen(server);
app.set('io', io);

// cria a conexão por websocket
io.on('connection', function(socket) {
    console.log('Usuário conectou!!!');

    socket.on('disconnect', function() {
        console.log('Usuário desconectou!!!');
    });

    socket.on('msgParaServidor', function(data) {
        // Atualiza diálogo
        var content = { apelido: data.apelido, mensagem: data.mensagem }
        socket.emit('msgParaCliente', content);
        socket.broadcast.emit('msgParaCliente', content);

        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            // Atualiza lista de participantes
            socket.emit('participantesParaCliente', { apelido: data.apelido });
            socket.broadcast.emit('participantesParaCliente', { apelido: data.apelido });
        }
    });

});