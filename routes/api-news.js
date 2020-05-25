// const NewsAPI = require('newsapi');
// var db = require("../models");


// const newsapi = new NewsAPI('75d12e4aed504da3878657856f888232');
// const seconds = 1000;
// const minute = 60 * seconds;
// const hour = minute * 60;
// const hours = 12 * hour;
// let linkLimit = 3;
// // let lastDate = 0;
// let userArticles=[];

// const nodemailer = require("nodemailer");let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//       user: "newsflash12Hr@gmail.com",
//       pass: "bootcamp123"
//   }
// });

// const getData = (category, cb) => {
//   let list=[]  
//   newsapi.v2.topHeadlines({
//     // q: query,
//     category: category,
//     language: 'en',
//     country: 'us'
//       }).then(response => {
//         // console.log("Before call back",response)
//         cb(response.articles,list)
//       });
// }
// const getArticles = (category, limit, res) => {
//   console.log('getArticles');
//   newsapi.v2.topHeadlines({
//     // q: query,
//     category: category,
//     language: 'en',
//     country: 'us'
//       }).then(response => {
//         // console.log("CATEGORIES",category)
//         // console.log("response from API",response)
        
//         for (let i = 0; i < limit; i++){
//           userArticles.push(response.articles[i]);
//         }
//         if (userArticles.length >= 9) {
//           // console.log(",,,,,,,,,,,,,,,,,,,,,,,,",userArticles);
//           res.send(JSON.stringify(userArticles));
//           userArticles = [];
//         }
//       });
// }

// let refreshNews = () => {};

// const getNews = () => {
//   refreshNews = setInterval(() => {
//     // console.log(transporter);

//     // calls the storeLinks function to save articles to the database
//     storeLinks();
//   },60000);
  
// }

// const stopNews = () => {
//   clearInterval(refreshNews);
//   console.log('news stopped');
// }

// // goes through all users and adds article base on user categories
// const storeLinks = () => {

//   // test code
//   // db.User.create(
//   //   {
//   //     email: "Deepi@gmail.com",
//   //     password: "123",
//   //     categories: "sports,politics"
//   //   }
//   // )

//   // console.log("column created");
//   db.SavedArticle.destroy({
//     where: {
//       saved: false
//     }
//   })


//   db.User.findAll().then(users => {

//     // cycle through users
//     for (let i = 0; i < users.length; i++) {
//       // add articles to savearticle based on user preference
//       let categories = users[i].categories.replace(" ", "").split(',');
//       const obj = {
//         email: users[i].email,
//         notify: users[i].notify,
//         links: [],
//         titles: []
//       }

//       for (let j = 0; j < categories.length; j++) {
//         linkLimit = 10 / categories.length;
//         let links = [];
//         let titles = [];
//         getData(categories[j], data => {
//           links = getLinks(data, 'url');
//           titles = getLinks(data, 'title');
//           obj.links = [...links, ...obj.links]; 
//           obj.titles = [...titles, ...obj.titles];

//           saveArticles(links, users[i].email);
          
//         });
//       }

//       if (obj.notify) {
//         // call deepika's function here!!!!!!!!!
//       }
      
//     }
//   })
// }

// const getLinks = (list, type)  => {
//   const subList = [];
//   for (let i = 0; i < linkLimit; i++) {
//     if (list[i] != undefined) {
//       if (type === 'url') {
//         subList.push(list[i].url);
//       } else if (type === 'title') {
//         subList.push(list[i].title);
//       }
//     }
    
//   }
//   return subList;
// }


// // save each link connected to an email 
// // to the database and delete unsaved articles
// const saveArticles = (list, email, titles) => {

//   for (let i = 0; i < list.length; i++) {
//     db.SavedArticle.create(
//       {
//         email: email,
//         title: titles[i],
//         link: list[i]
//       }
//     )
//   }

//   sendEmail();
// }

// // save each link connected to an email 
// // to the database and delete unsaved articles
// // const saveArticles = (list, email) => {

// //   db.SavedArticle.destroy({
// //     where: {
// //       saved: false
// //     }
// //   })

// //   for (let i = 0; i < list.length; i++) {
// //     db.SavedArticle.create(
// //       {
// //         email: email,
// //         link: list[i]
// //       }
// //     )
// //   }

// //   sendEmail();
// // }

// async function sendEmail(){    let info = await transporter.sendMail({
//   from: '"News Flash " <newsflash12Hr@gmail.com>', // sender address
//   to: "newsflash12Hr@gmail.com", // list of receivers
//   bcc: "mitchgj@hotmail.com, jenn_ballard7@hotmail.com,  m.megha21@gmail.com, chrismw7579@gmail.com, ankita.kulkarni84@gmail.com",
//   subject: "Hello ✔", // Subject line
//   // text: "Thank you for using News Flash", // plain text body
//   html: "<b>Thank you for using News Flash</b> <br> <img src='https://media.giphy.com/media/KxsmofvNnJWGLs3haf/giphy.gif'></img>" // html body
// });    console.log("Message sent " + info.messageId)
// }

// module.exports = {
//   getNews,
//   stopNews,
//   getArticles
// }

const NewsAPI = require('newsapi');
var db = require("../models");


const newsapi = new NewsAPI('75d12e4aed504da3878657856f888232');
const seconds = 1000;
const minute = 60 * seconds;
const hour = minute * 60;
const hours = 12 * hour;
let linkLimit = 3;

let userArticles = [];

// let lastDate = 0;

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
    
  newsapi.v2.topHeadlines({
    // q: query,
    category: category,
    language: 'en',
    country: 'us'
      }).then(response => {
        cb(response.articles)
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
  },hours);
  
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

  
  db.SavedArticle.destroy({
    where: {
      saved: false
    }
  })

  db.User.findAll().then(users => {
    // cycle through users
    for (let i = 0; i < users.length; i++) {
      // add articles to savearticle based on user preference
      let categories = users[i].categories.replace(" ", "").split(',');
      const obj = {
        email: users[i].email,
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

          saveArticles(links, users[i].email, titles);
          
          if (obj.links.length >= 9) {
            if (obj.links.length == 10) {
              obj.links.pop(obj.links[9]);
              obj.titles.pop(obj.links[9]);
            }
            //console.log("first ", obj);
            // send emails to users
            if (users[i].notify) {
              sendEmail(obj);
            }
            
           
          }
        });
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
const saveArticles = (list, email, titles) => {

  for (let i = 0; i < list.length; i++) {
    db.SavedArticle.create(
      {
        email: email,
        title: titles[i],
        link: list[i]
      }
    )
  }

  sendEmail();
}

async function sendEmail(){    let info = await transporter.sendMail({
  from: '"NewsFlash " <newsflash12Hr@gmail.com>', // sender address
  to: "newsflash12Hr@gmail.com", // list of receivers
  bcc: "mitchgj@hotmail.com, jenn_ballard7@hotmail.com,  m.megha21@gmail.com, chrismw7579@gmail.com, ankita.kulkarni84@gmail.com",
  subject: "Hello ✔", // Subject line
  // text: "Thank you for using News Flash", // plain text body
  html: "<b>Thank you for using NewsFlash</b> <br> <img src='https://media.giphy.com/media/KxsmofvNnJWGLs3haf/giphy.gif'></img>" // html body
});    console.log("Message sent " + info.messageId)
}

module.exports = {
  getNews,
  stopNews,
  getArticles
}






// test code
  // db.User.create(
  //   {
  //     email: "chrismw7579@gmail.com",
  //     password: "123",
  //     categories: "sports,politics"
  //   }
  // )

  // console.log("column created");








async function sendEmail(obj){    
  let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>News</title>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            />
        </head>
        <body>
            <div class="container" style="background-color: black">
                <b style="margin-right: 10px; color: #F781B0">Thank you for using NewsFlash</b><span ><a href="#" style="color:#BA2D65">Go to App</a></span> <br> 
                <img style="width: 280px; height:260px;margin-right: 5px;" src='https://media.giphy.com/media/KxsmofvNnJWGLs3haf/giphy.gif'></img>
                <div style="width: auto; height:80px; border-style: solid;border-color: #BA2D65; background-color:black; color:#F781B0">
                    <p><strong>${obj.titles[0]}</strong></p>
                    <p><a target="_blank" href=${obj.links[0]}>Read the article</a></p>
                </div>                <div style="width: auto; height:80px; border-style: solid;border-color: #BA2D65; background-color: black;color:#F781B0">
                <p><strong>${obj.titles[1]}</strong></p>
                <p><a target="_blank" href=${obj.links[1]}>Read the article</a></p>
                </div>                <div style="width: auto; height:80px; border-style: solid;border-color: #BA2D65; background-color: black;color:#F781B0">
                <p><strong>${obj.titles[2]}</strong></p>
                <p><a target="_blank" href=${obj.links[2]}>Read the article</a></p>
                </div>                <div style="width: auto; height:80px; border-style: solid;border-color: #BA2D65; background-color: black;color:#F781B0">
                <p><strong>${obj.titles[3]}</strong></p>
                <p><a target="_blank" href=${obj.links[3]}>Read the article</a></p>
                </div>                <div style="width: auto; height:80px; border-style: solid;border-color: #BA2D65; background-color: black;color:#F781B0">
                <p><strong>${obj.titles[4]}</strong></p>
                <p><a target="_blank" href=${obj.links[4]}>Read the article</a></p>
                </div>                <div style="width: auto; height:80px; border-style: solid;border-color: #BA2D65; background-color: black; color:#F781B0">
                <p><strong>${obj.titles[5]}</strong></p>
                <p><a target="_blank" href=${obj.links[5]}>Read the article</a></p>
                </div>                <div style="width: auto; height:80px; border-style: solid;border-color: #BA2D65; background-color: black;color:#F781B0">
                <p><strong>${obj.titles[6]}</strong></p>
                <p><a target="_blank" href=${obj.links[6]}>Read the article</a></p>
                </div>                <div style="width: auto; height:80px; border-style: solid;border-color: #BA2D65; background-color: black;color:#F781B0">
                <p><strong>${obj.titles[7]}</strong></p>
                <p><a target="_blank" href=${obj.links[7]}>Read the article</a></p>
                </div>                <div style="width: auto; height:80px; border-style: solid;border-color: #BA2D65; background-color: black;color:#F781B0">
                <p><strong>${obj.titles[8]}</strong></p>
                <p><a target="_blank" href=${obj.links[8]}>Read the article</a></p>
                </div>            </div>
        </body>
        </html>`        
            let info = await transporter.sendMail({
            from: '"News Flash " <newsflash12Hr@gmail.com>', // sender address
            to: obj.email,
            //bcc: obj.email,
            subject: "Your 12Hr dose of news delivered ✔ ", // Subject line
            // text: "Thank you for using News Flash", // plain text body
            //html: "<b>Thank you for using News Flash</b> <br> <img src='https://media.giphy.com/media/KxsmofvNnJWGLs3haf/giphy.gif'></img>" // html body
            html: html
          });        console.log("Message sent " + info.messageId)
}




const obj = {
  email: "chrismw7579@gmail.com",
  notify: true,
  links: ["https://www.cbsnews.com/news/unemployment-claims-3-million-jobless-report-last-week/","https://www.cbsnews.com/news/unemployment-claims-3-million-jobless-report-last-week/","https://www.cbsnews.com/news/unemployment-claims-3-million-jobless-report-last-week/"],
  titles: ["1Nearly 3 million U.S. workers filed unemployment claims last week - CBS News","2Nearly 3 million U.S. workers filed unemployment claims last week - CBS News","3Nearly 3 million U.S. workers filed unemployment claims last week - CBS News"]
}



// testing functions below

// sendEmail(obj);


// storeLinks();