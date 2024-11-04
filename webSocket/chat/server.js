const express = require('express');
const app = express();

app.use(express.static('public'));

const http = require('http').Server(app);
const serverSocket = require('socket.io')(http);

const port = process.env.PORT || 8000;

http.listen(port, () => {
    console.log('Servidor Iniciado, abra em: http://localhost:' + port);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

serverSocket.on('connection', (socket) => {
    console.log(`O usuário: ${socket.id} foi conectado!`);

    socket.on('login', (nickname) => {
        console.log(`O usuário: ${nickname} foi conectado!`)
        serverSocket.emit('chat msg', `O usuário: ${nickname} foi conectado!!`)

        socket.nickname = nickname;
    });

    socket.on('status', (msg) => {
        socket.broadcast.emit('status', msg);
    });

    socket.on('chat msg', (msg) => {
        console.log(`O usuário: ${socket.nickname}, enviou: ${msg}`);

        serverSocket.emit('chat msg', msg);
    });
});