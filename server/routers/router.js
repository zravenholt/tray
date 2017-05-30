const express = require('express')
const crawl = require('../helpers/nightmare.js')
const { client } = require('../main.js')

const postRouter = express.Router()

postRouter.get('/posts/:subreddit/:tag', (req, res) => {
  console.log(req.params);
  crawl(req.params.subreddit, req.params.tag, (result) => {
    console.log(result);
    if (result.error) {
      res.send(400, result);
    }
    res.send(result);
  })
})

module.exports = postRouter;
  
