const express = require('express');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 8000;

app.use(express.json())

io.on('connection', (socket) => {

    socket.on('ROOM:LOGIN', ( chatID ) => {
        socket.join(chatID);
        socket.broadcast.to(chatID).emit('ROOM:JOINED', chatID);
    });

    socket.on('ROOM:ENTER_MESSAGE', ({ newMessages, myChatId }) => {
        socket.broadcast.emit('ROOM:ENTER_MESSAGE', newMessages, myChatId);
    });
});


http.listen(port, (err) => {
    if (err) {
        throw Error(err);
    }

    console.log('Сервер запущен');
});
