import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("A user connected:", socket.id);

      // Handle messages from the client
      socket.on("message", (msg) => {
        console.log("Message received:", msg);
        // Broadcast the message to other clients
        socket.broadcast.emit("message", msg);
      });

      // Handle disconnection
      socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
      });
    });
  }
  res.end();
}
