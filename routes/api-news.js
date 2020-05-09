const NewsAPI = require('newsapi');
var db = require("../models");

const newsapi = new NewsAPI('75d12e4aed504da3878657856f888232');
const seconds = 1000;
const minute = 60 * seconds;
const hour = minute * 60;
const hours = 12 * hour;



const getData = (category, cb) => {
    
  newsapi.v2.topHeadlines({
    // q: query,
    category: category,
    language: 'en',
    country: 'us'
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
    // calls the storeLinks function to save articles to the database

  },hours);
  
}


const stopNews = () => {
  clearInterval(refreshNews);
  console.log('news stopped');
}

// goes through all users and adds article base on user categories
const storeLinks = () => {
  db.user.findAll().then(users => {
    // cycle through users
    for (let i = 0; i < users.data.length; i++) {
      // add articles to savearticle based on user preference
      let categories = users.data.categories.split(',');

      for (let i = 0; i < categories.length; i++) {
        let link = '';
        getData(categories[i], data => {
          link = data;
        });

        db.savedArticles.create(
            {
              email: users.data[i].email,
              link: link
            }
          )
      }
     
    }
    
  })
    
    
}




module.exports = {
  getNews,
  stopNews
}

