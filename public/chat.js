// public/chat.js

// Connect to the server using Socket.IO
const socket = io();

// HTML elements
const usernameInput = document.getElementById('username');
const joinChatButton = document.getElementById('joinChat');
const chatSection = document.getElementById('chatSection');
const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendMessageButton = document.getElementById('sendMessage');

// When the user joins the chat
joinChatButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        socket.emit('joinChat', username);
        chatSection.style.display = 'block'; // Show chat section
        document.getElementById('usernameInput').style.display = 'none'; // Hide username input
    }
});

// Listen for messages from the server
socket.on('message', (message) => {
    const div = document.createElement('div');
    div.classList.add('border-bottom', 'pb-2');
    div.innerHTML = `<strong>${message.user}</strong>: ${message.text}`;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
});

// Listen for list of online users
socket.on('userList', (users) => {
    console.log('Online Users:', users);
});

// Sending a chat message
sendMessageButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('chatMessage', message);
        messageInput.value = ''; // Clear the input
    }
});

// Listen for list of online users (optional)
socket.on('userList', (users) => {
    console.log('Online Users:', users);
});
