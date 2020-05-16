const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const {getNews} = require("./routes/api-news");
var passport = require("./config/passport");
var session = require("express-session");



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var db = require("./models");
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function() {
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  getNews();
});
});