const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const welcomeRoute = require('./routes/welcome');
const wildCardRoute = require('./routes/wildCard');
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
} = require('./utils/User');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(welcomeRoute);
app.use(wildCardRoute);

io.on('connect', socket => {
  socket.on('join', ({ username, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name: username, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit('message', {
      user: 'adminX',
      text: `${user.name.toUpperCase()}, Welcome to ${user.room} room.`
    });
    socket.broadcast.to(user.room).emit('message', {
      user: 'adminX',
      text: `${user.name.toUpperCase()} has joined!`
    });

    io.to(user.room).emit('roomData', {
      room: user.room,
      users: getUsersInRoom(user.room)
    });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {
        user: 'adminX',
        text: `${user.name.toUpperCase()} has left.`
      });
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: getUsersInRoom(user.room)
      });
    }
  });
});

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started.`)
);
