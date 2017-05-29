const express = require('express')
const crawl = require('../helpers/nightmare.js')

const postRouter = express.Router()

postRouter.get('/posts/:subreddit/:tag', (req, res) => {
  console.log(req.params);
  crawl(req.params.subreddit, req.params.tag, (result) => {
    if (result.error) {
      res.status(400);
      res.send(result);
      res.end();
    }

    res.send(result);
    res.end();
  })
})

module.exports = postRouter;
  
