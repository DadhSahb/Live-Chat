const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname + "/public")));

io.on("connection", function (socket) {
  socket.on("newuser", function (username) {
    socket.broadcast.emit("update", username + " " + " joined the conversion");
  });
  socket.on("exituser", function (username) {
    socket.broadcast.emit("update", username + " " + " left the conversion");
  });
  socket.on("chat", function (message) {
    socket.broadcast.emit("chat", message);
  });

  socket.on("typing", (data) => {
    if (data.typing == true) io.emit("display", data);
    else io.emit("display", data);
  });
});
server.listen(5000, () => {
  console.log("listening on *:5000");
});
