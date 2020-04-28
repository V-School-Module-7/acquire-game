const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require();

const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
} = require('');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
    socket.on('joinRoom', ({
        username,
        room
    }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        socket.emit('message', formatMessage(botName, 'Welcome to the Acquire Lobby'));


        socket.broadcast
        .to(user.room)
        .emit(
            'message',
            formatMessage(botName, `$ {
            user.username
        }
        has joined the chat`)),
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        })
    });
});

socket.on('chatMessage', msg => {
const user = getCurrentUser(socket.id);

if (user) {
    io.to(user.room).emit(
        'message',
        formatMessage(botName, `$ {
            user.username
        }
        has left the chat`));

    io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
    });
}
});

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port $ {
    PORT
}`));