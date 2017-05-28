const express = require('express')
const crawl = require('../helpers/nightmare.js')

const postRouter = express.Router()

postRouter.get('/posts/:subreddit/:tag', (req, res) => {
  crawl(req.params.subreddit, req.params.tag, (result) => {
    res.send(result);
  })
})

module.exports = postRouter;
  
