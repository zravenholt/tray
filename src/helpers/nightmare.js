const Nightmare = require('nightmare')
nightmare = Nightmare({ show: true });

nightmare
  .goto(`https://www.reddit.com/r/hiphopheads`)
  .wait('a.title')
  .evaluate(function() {
    let titles = Array.prototype.slice.call(document.querySelectorAll("a.title"));
    titles = titles.map((v) => {
      return {
        target: v.href,
        innerHTML: v.innerHTML,
        innerText: v.innerText
      }
    });
    return titles.filter((v) => {
      // let crit = tag.toLowerCase();
      return v.innerText.toLowerCase().includes('fresh');
    })
  })
  .end()
  .then((response) => {
    console.log(response);
    return response;
  })

  