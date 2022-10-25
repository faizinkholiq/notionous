const express = require("express")
const app = express()
const PORT = 4000
const http = require('http').Server(app)
const cors = require('cors')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
})

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('disconnect', () => {
        socket.disconnect()
        console.log('🔥: A user disconnected');
    });
});

app.get('/api', (req, res) => {
    res.json({
        message: "Hello World",
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});