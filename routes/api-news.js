const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('75d12e4aed504da3878657856f888232');
const seconds = 2000;



const getData = (query, country, category, cb) => {
    
  newsapi.v2.topHeadlines({
    q: query,
    category: category,
    language: 'en',
    country: country
      }).then(response => {
        // console.log(response.articles[0].source.name);
        // console.log(response.articles);
        cb(response.articles)
      });
}

module.exports = getData;


// getData('Trump', 'us', '', (data) => {
//   console.log(data);
// });

let refreshNews = () => {};

const getNews = () => {
  refreshNews = setInterval(() => {
    console.log('news started');
  },seconds);
  // call api
}

const stopNews = () => {
  clearInterval(refreshNews);
  console.log('news stopped');
}


module.exports = {
  getNews,
  stopNews
}
