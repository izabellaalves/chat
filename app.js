var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket) {
    socket.on('chat ion', function(msg) {
        io.emit('chat ion', msg)
    });
});

http.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
})