const express = require('express')
const crawl = require('../helpers/nightmare.js')

const postRouter = express.Router()

postRouter.get('/posts/:subreddit/:tag', (req, res) => {
  console.log(req.params);
  crawl(req.params.subreddit, req.params.tag, (result) => {
    console.log(result)
    res.send(result);
  })
})

module.exports = postRouter;
  
