// import express
const express = require('express');
const userRouter = require("./routers/userRouter");
const roomRouter = require("./routers/roomRouter");

// intializing express
const { createServer } = require("http");
const { Server } = require("socket.io");

const cors = require("cors");

//  assign express in app and port 5000
const app = express();
const port = 5000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

//  converting json to js
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

//  middle ware
app.use("/user", userRouter);
app.use("/room", roomRouter);

io.on("connection", (socket) => {
  console.log("socket connected");

  socket.on('sendmsg', (data) => {
    console.log(data);

    data.sent = false;
    socket.to(data.room).emit('recmsg', data);
  })

  socket.on('joinroom', (room) => {
    console.log(room);
    socket.join(room);
  })

});

// endpoint
app.get("/", (req, res) => {
  res.send("response from express");
});

httpServer.listen(port, () => {
  console.log("server started");
});