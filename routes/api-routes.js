// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const { getArticles } = require("./api-news");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  
  app.post("/api/login",function (req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body)
    next()
}, passport.authenticate("local"), function(req, res) {
    // console.log("SENDING BACK",req)
    res.json(req.user);
  
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // route for saving an article
  app.post("/api/save_article", function(req, res) {
    db.savedArticles.create({
      email: req.body.email,
      link: req.body.link,
      saved: true
    })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // route for retrieving saved articles for any user
  app.get("/api/get_saved_articles", function (req, res) {
    db.savedArticles.findAll( {
      where: {
        email: req.body.email
      }
    })
    .then(function (results) {
      res.json(results);
    })
  })

  // // Route for logging user out
  // app.get("/api/logout", function(req, res) {
  //   console.log("Inside logout###")
  //   req.logout();
  //   res.redirect("/");
  // });

  app.post('/api/logout', (req, res) => {
    console.log("LOGOUTTTT")
    if (req.user) {
        req.logout();
        // console.log("Logout response is: ",res)
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    console.log("REQ>USER??",req.user)
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        categories:req.user.categories
      });
    }
  });

  app.get('/api/user/', (req, res, next) => {
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

app.delete('/api/userdelete/:id',(req,res)=>{
  console.log("req id is",req.params.id);
    db.User.destroy({
      where:{
        id:req.params.id
      }
    }).then(function () {
      // console.log(req.body);
      // console.log(result);
      console.log('Deletion successful');
      res.end()
      // res.logout()
      // res.json({result});
      // res.redirect('/api/logout');
      // location.href('/api/logout')
    });
})

app.put('/api/setcategory',function(req,res){

  console.log("setcat req",req.user)
  db.User.update({categories:req.body.data},{
    where:{
      id:req.user.id
    }
  })
})

app.put('/api/setemail',function(req,res){

  console.log("setcat req",req.user)
  db.User.update({notify:req.body.data},{
    where:{
      id:req.user.id
    }
  })
})

app.get('/api/settings/:email',function(req,res){
  // console.log("EMAIL Got",req.user)
  db.User.findOne(
    // {
    //   attributes: ['categories']
    // },
    {
      where: {
        // id: req.user.id
        email:req.params.email
      }
    }
  )
  .then(response=>{
    // console.log("categories found!!!",response)
    res.send(response);
  })
})


// app.get('/api/settings/notification/:email',function(req,res){
//   console.log("Inside notif email",req.params);
//   db.User.findAll(
//     {
//       attributes: ['notify']
//     },
//     {
//       where: {
//         email: req.params.email
//       }
//     }
//   )
//   .then(response=>{
//     // console.log("EMAIL&&&&",response)
//     res.send(response);
//   })

// })

// route for getting article data based on user categories
app.get("/api/categories/:email", (req, res) => {
  // console.log("USER CATEGORIES",req.params.email)
  
  db.User.findOne(
    {
      attributes: ['categories']
    },
    {
      where: {
        email: req.params.email
      }
    }
  )
  .then(data => {
      let categories = data.dataValues.categories.replace(" ", "").split(',');
      let limit = Math.floor(12 / categories.length);
      for (let i = 0; i < categories.length; i++) {
        getArticles(categories[i], limit,res);
      }
  })

})

// route for setting toggling the articles "saved" status
app.post('/api/user/:id', (req, res) => {
  db.SavedArticle.update(
    {
      saved: true
    },
    {
      where: {
        id: req.params.id
        // email:req.params.email,
        // link:req.params.link
      }
    }
  )
})

 // sends the articles the user has saved
app.get('/api/user/saved', (req, res) => {
  // console.log("EMAIL",db.SavedArticle,req.email)
  db.SavedArticle.findAll(
      {
          where: {
            email: req.email,
            saved: true
          }
      }
  ).then(articles => res.send(articles));
})


    // sends the suggested articles to the user
    app.get('/api/user/suggested', (req, res) => {
      console.log("saved",db.savedArticles);
      db.SavedArticle.findAll(
          {
            where: {
              email: req.user.email,
              saved: false
            }
          }
      ).then(articles => res.send(articles));
    })

};


// db.User.findOne(
//   // {
//   //   attributes: ['categories']
//   // },
//   {
//     where: {
//       email: 'test2@gmail.com'
//     }
//   }
// )
// .then(response=>{
//   console.log("categories found!!!",response)
//   // res.send(response);
// })
