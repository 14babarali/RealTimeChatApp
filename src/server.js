// src/server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

// Initialize Express app
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO on the server
const io = new Server(server);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Array to keep track of online users
let onlineUsers = [];

// When a client connects
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Event for when a user joins the chat
    socket.on('joinChat', (username) => {
        onlineUsers.push({ id: socket.id, username });
        socket.username = username;
        console.log(`${username} joined the chat`);
        
        // Notify all clients about the new user
        io.emit('userList', onlineUsers);
        socket.broadcast.emit('message', { user: 'admin', text: `${username} has joined the chat.` });
    });

    // Event for receiving messages
    socket.on('chatMessage', (msg) => {
        io.emit('message', { user: socket.username, text: msg });
    });

    // Event for when a user disconnects
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
        onlineUsers = onlineUsers.filter((user) => user.id !== socket.id);
        io.emit('userList', onlineUsers);
        socket.broadcast.emit('message', { user: 'admin', text: `${socket.username} has left the chat.` });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
