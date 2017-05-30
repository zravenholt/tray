const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const redis = require('redis');
const socketio = require('socket.io');
const { postRouter, setRedisClient, setSocket } = require('./routers/router.js');
const { PORT } = require('./config');

const jsonParser = bodyParser.json();
const client = redis.createClient();
setRedisClient(client);

const app = express();
const server = http.Server(app);
const io = socketio(server);
setSocket(io);

server.listen(PORT, () => console.log(`listening on *:${PORT}`));

app.use(cors());

app.use(jsonParser);

app.use('/api', postRouter);

io.on('connection', (socket) => {
  setSocket(socket);

  socket.on('retrieve posts', (data) => {
    client.hget(data.subreddit, data.tag, (err, obj) => {
      let posts = JSON.parse(obj);
      socket.emit('receive posts', { posts: posts });
    });
  });
})