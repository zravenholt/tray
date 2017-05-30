const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const redis = require('redis');
const socketio = require('socket.io');
const router = require('./routers/router.js');
const { PORT } = require('./config');

const client = redis.createClient();
const app = express();
const server = http.Server(app);
const jsonParser = bodyParser.json();
const io = socketio(server);

server.listen(PORT, () => console.log(`listening on *:${PORT}`));

app.use(cors());

app.use(jsonParser);

app.use('/api', router);

io.on('connection', (socket) => {
  console.log("socket from client")
  socket.on('retrieve posts', (data) => {
    //write logic for redis retrieval
    // client.hgetall("hiphopheads:fresh", (err, obj) => {
    //   console.log("redris retrieve is", obj);
    // })
  })
})




// io.on('connection', (socket) => {
//   console.log("connected");
//   socket.on('retrieve posts', (data) => {
//     console.log("socket connect from client", data);
//   })
// })