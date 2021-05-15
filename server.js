/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 4001;

const router = express.Router();
router.get('/', (req, res) => {
    res.send({ response: 'I am alive' }).status(200);
});

const app = express();
app.use(router);

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST'],
    },
});

const getApiAndEmit = (socket) => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit('FromAPI', response);
};

let interval;

io.on('connection', (socket) => {
    console.log('New client connected');
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on('disconnect', () => {
        console.log('Client disconnected');
        clearInterval(interval);
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
