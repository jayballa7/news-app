const NewsAPI = require('newsapi');
var db = require("../models");


const newsapi = new NewsAPI('75d12e4aed504da3878657856f888232');
const seconds = 1000;
const minute = 60 * seconds;
const hour = minute * 60;
const hours = 12 * hour;
let linkLimit = 3;
// let lastDate = 0;
let userArticles=[];

const nodemailer = require("nodemailer");let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
      user: "newsflash12Hr@gmail.com",
      pass: "bootcamp123"
  }
});

const getData = (category, cb) => {
  let list=[]  
  newsapi.v2.topHeadlines({
    // q: query,
    category: category,
    language: 'en',
    country: 'us'
      }).then(response => {
        // console.log("Before call back",response)
        cb(response.articles,list)
      });
}
const getArticles = (category, limit, res) => {
  console.log('getArticles');
  newsapi.v2.topHeadlines({
    // q: query,
    category: category,
    language: 'en',
    country: 'us'
      }).then(response => {
        console.log("CATEGORIES",category)
        console.log("response from API",response)
        
        for (let i = 0; i < limit; i++){
          userArticles.push(response.articles[i]);
        }
        if (userArticles.length >= 9) {
          // console.log(userArticles);
          res.send(JSON.stringify(userArticles));
          userArticles = [];
        }
      });
}

let refreshNews = () => {};

const getNews = () => {
  refreshNews = setInterval(() => {
    // console.log(transporter);

    // calls the storeLinks function to save articles to the database
    storeLinks();
  },60000);
  
}

const stopNews = () => {
  clearInterval(refreshNews);
  console.log('news stopped');
}

// goes through all users and adds article base on user categories
const storeLinks = () => {

  // test code
  // db.User.create(
  //   {
  //     email: "Deepi@gmail.com",
  //     password: "123",
  //     categories: "sports,politics"
  //   }
  // )

  // console.log("column created");



  db.User.findAll().then(users => {

    // cycle through users
    for (let i = 0; i < users.length; i++) {
      // add articles to savearticle based on user preference
      let categories = users[i].categories.replace(" ", "").split(',');
      const obj = {
        email: users[i].email,
        notify: users[i].notify,
        links: [],
        titles: []
      }

      for (let j = 0; j < categories.length; j++) {
        linkLimit = 10 / categories.length;
        let links = [];
        let titles = [];
        getData(categories[j], data => {
          links = getLinks(data, 'url');
          titles = getLinks(data, 'title');
          obj.links = [...links, ...obj.links]; 
          obj.titles = [...titles, ...obj.titles];

          saveArticles(links, users[i].email);
          
        });
      }

      if (obj.notify) {
        // call deepika's function here!!!!!!!!!
      }
      
    }
  })
}

const getLinks = (list, type)  => {
  const subList = [];
  for (let i = 0; i < linkLimit; i++) {
    if (list[i] != undefined) {
      if (type === 'url') {
        subList.push(list[i].url);
      } else if (type === 'title') {
        subList.push(list[i].title);
      }
    }
    
  }
  return subList;
}

// save each link connected to an email 
// to the database and delete unsaved articles
const saveArticles = (list, email) => {

  db.SavedArticle.destroy({
    where: {
      saved: false
    }
  })

  for (let i = 0; i < list.length; i++) {
    db.SavedArticle.create(
      {
        email: email,
        link: list[i]
      }
    )
  }

  sendEmail();
}

async function sendEmail(){    let info = await transporter.sendMail({
  from: '"News Flash " <newsflash12Hr@gmail.com>', // sender address
  to: "newsflash12Hr@gmail.com", // list of receivers
  bcc: "mitchgj@hotmail.com, jenn_ballard7@hotmail.com,  m.megha21@gmail.com, chrismw7579@gmail.com, ankita.kulkarni84@gmail.com",
  subject: "Hello ✔", // Subject line
  // text: "Thank you for using News Flash", // plain text body
  html: "<b>Thank you for using News Flash</b> <br> <img src='https://media.giphy.com/media/KxsmofvNnJWGLs3haf/giphy.gif'></img>" // html body
});    console.log("Message sent " + info.messageId)
}

module.exports = {
  getNews,
  stopNews,
  getArticles
}