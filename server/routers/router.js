const express = require('express')
const crawl = require('../helpers/nightmare.js')
const postRouter = express.Router()
const axios = require('axios')

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
  axios.get(`https://www.reddit.com/r/${req.body.subreddit}.json`)
    .then((result) => {
      let posts = result.data.data.children;
      let brackets = /\[(.*?)\]/;

      let matched = posts.filter((child) => {
        if (child.data.title.match(brackets)) {
          let title = child.data.title.match(brackets)[0];
          return title.toLowerCase().includes(`${req.body.tag}`);
        }
        return false; })
        .map((match) => {
          return {
            subreddit: req.body.subreddit,
            tag: req.body.tag,
            permalink: match.data.permalink,
            comments: match.data.num_comments,
            target: match.data.url,
            title: match.data.title
          }
        })
  

      let flat = JSON.stringify(matched);
      client.hset(req.body.subreddit, req.body.tag, flat);
      socket.emit('reddit-posted', { subreddit: req.body.subreddit, tag: req.body.tag });
      res.sendStatus(200); 
    })
   .catch((err) => {
     console.log(err);
     res.sendStatus(400);
   }) 
})


//CRAWLER METHOD
// crawl(req.body.subreddit, req.body.tag, (result, subreddit, tag) => {
//   if (result.error) {
//     res.send(400, result);
//   }
//   let flat = JSON.stringify(result);
//   console.log(flat);
//   client.hset(subreddit, tag, flat);
//   socket.emit('reddit-posted', { subreddit: subreddit, tag: tag })
//   res.sendStatus(200);
// })

module.exports = {
  postRouter: postRouter,
  setRedisClient: function(inMainClient) { client = inMainClient },
  setSocket: function(inMainSocket) { socket = inMainSocket }
}
  