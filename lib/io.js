const io = require('socket.io')();

io.on('connection', (socket) => {
    console.log('Socket Connected');
});

module.exports = io;
