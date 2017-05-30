const express = require('express')
const crawl = require('../helpers/nightmare.js')
const postRouter = express.Router();

var client;
var socket;

postRouter.get('/posts/:subreddit/:tag', (req, res) => {
  crawl(req.params.subreddit, req.params.tag, (result) => {
    if (result.error) {
      res.send(400, result);
    }
    res.send(result);
  })
})

postRouter.post('/posts', (req, res) => {
  crawl(req.body.subreddit, req.body.tag, (result, subreddit, tag) => {
    if (result.error) {
      res.send(400, result);
    }
    let flat = JSON.stringify(result);
    console.log(flat);
    client.hset(subreddit, tag, flat);
    socket.emit('reddit-posted', { subreddit: subreddit, tag: tag })
    res.sendStatus(200);
  })
})

module.exports = {
  postRouter: postRouter,
  setRedisClient: function(inMainClient) { client = inMainClient },
  setSocket: function(inMainSocket) { socket = inMainSocket }
}
  