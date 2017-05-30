const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false })

module.exports = function(subreddit, tag, cb) {
  nightmare
    .goto(`https://www.reddit.com/r/${subreddit}`)
    .wait("a.title")
    .evaluate(function(tag) {
      let titles = Array.prototype.slice.call(document.querySelectorAll("a.title"));
      titles = titles.map((v) => {
        return {
          target: v.href,
          innerHTML: v.innerHTML,
          innerText: v.innerText
        }
      });
      return titles.filter((v) => {
        return v.innerText.toLowerCase().includes(`[${tag}]`);
      })
    }, tag)
    .then((res) => {
      let response = {
        error: false,
        data: res 
      }
      cb(response);
    })
    .catch((error) => {
      let response = {
        error: error,
        data: null
      }
      cb(response)
    })
}

  