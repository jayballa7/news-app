// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const { getData } = require("./api-news");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  
  app.post("/api/login",function (req, res, next) {
    console.log("@@@");
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
    console.log("REACHEDDDDDDDDD");
    console.log("^^^^",req.body);
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

  // Route for logging user out
  // app.get("/api/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });

  app.post('/api/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get('/api/user/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})
    // sends the suggested articles to the user
  app.get('/api/user/suggested', (req, res) => {
    db.savedArticles.findAll(
        {
          where: {
            email: req.email,
            saved: false
          }
        }
    ).then(articles => res.send(articles));
  })

  // sends the articles the user has saved
  app.get('/api/user/saved', (req, res) => {
    db.SavedArticle.findAll(
        {
            where: {
              email: req.email,
              saved: true
            }
        }
    ).then(articles => res.send(articles));
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
      }
    }
  )
})

// route for getting article data based on user categories
app.get("/api/categories/:email", (req, res) => {
  const userArticles = [];
  db.User.findAll(
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
    
    let categories = data.replace(" ", "").split(',');
    let limit = 10 / categories.length;
    for (let i = 0; i < categories; i++) {
      getData(categories[i], articles => {
        for (let j = 0; j < limit; j++){
          userArticles.push(articles[j]);
        }
        
      })
    }
    res.send(JSON.stringify(userArticles));
  })
})

};

