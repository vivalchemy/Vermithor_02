import express from "express";
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Adjust this to match your frontend URL
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 3001;

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  socket.on("forumMessage", (message) => {
    console.log("Received message", message, socket.id);
    socket.broadcast.emit("forumMessage", message);
  });

  socket.on("privateMessage", (recipientId, message) => {
    socket
      .to(recipientId)
      .emit("privateMessage", { senderId: socket.id, message });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected userId", socket.id);
  });

  socket.on("connectAlumniUser", (userId, callbackFnc) => {
    console.log(userId, socket.id);
    socket.join(userId); // this will just keep joining you to the new rooms you won't be leaving the old rooms
    // use socket.leave(roomId) to leave the rooms
    callbackFnc("Joined room " + userId);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

