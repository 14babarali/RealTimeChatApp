﻿# Real-Time Chat Application with Node.js and Socket.IO

## Overview

This project is a fully functional **Real-Time Chat Application** built using **Node.js**, **Express**, and **Socket.IO**. It allows users to join the chat by entering a username, send messages to other users in real-time, and displays a list of online users. The purpose of this project is to demonstrate knowledge and expertise in **backend development**, focusing on **real-time communication** using **WebSockets**.

This project is especially relevant for preparing for **Node.js interviews**, including those for companies like **Mediatiz**, where skills in **real-time application development**, **Socket.IO**, and **event-driven architecture** are highly valued. The application is designed to showcase proficiency in these technologies, making it an ideal demonstration project for backend roles.

## Purpose

The primary goal of this project is to:
1. **Showcase knowledge of Node.js** and its role in backend development.
2. **Demonstrate skills in WebSockets** using **Socket.IO** to build real-time, scalable applications.
3. **Implement efficient server-side logic** that handles multiple users and data streams in real-time.
4. Prepare for technical interviews with a practical project that covers core backend development topics such as **real-time data handling**, **event-driven architecture**, and **RESTful API design**.
5. **Align with Mediatiz's job requirements**, particularly their emphasis on building scalable, low-latency applications, managing WebSocket connections, and optimizing performance.

## Features

- **Real-time communication**: Users can send and receive messages instantly using **WebSockets**.
- **Socket.IO integration**: Bi-directional, full-duplex communication between client and server using **Socket.IO**.
- **User management**: Displays the list of online users and notifies when someone joins or leaves the chat.
- **Scalable architecture**: Built with **Node.js** and **Express**, designed to handle real-time data for a large number of users.
- **Backend-focused**: Emphasizes the backend logic and event-driven architecture, including server-side authentication and message handling.

## Technologies Used

- **Node.js**: JavaScript runtime environment for building the backend server.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Socket.IO**: Library for real-time, bidirectional event-based communication.
- **HTML/CSS/Bootstrap**: Simple frontend interface for interacting with the chat system.
- **JavaScript**: Client-side scripting for handling user interactions.
- **Git**: Version control system for project collaboration and code management.


### Project Breakdown

#### Backend (`server.js`)

The backend server is built using **Node.js** and **Socket.IO**. It handles:
- Establishing WebSocket connections between clients and the server.
- Broadcasting messages to all users.
- Tracking and managing online users.
- Emitting real-time events when users join or leave the chat.

#### Frontend (`index.html`, `chat.js`)

The frontend is a simple **HTML** page powered by **Bootstrap** for styling and **Socket.IO** on the client-side to:
- Connect to the WebSocket server.
- Handle user interactions such as joining the chat and sending messages.
- Display messages in real-time.

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/14babarali/RealTimeChatApp/
cd realtimechatapp


npm install

npm start

The server will run on http://localhost:3000

