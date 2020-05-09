// This table will hold saved/bookmarked articles for every user
// The links will be tied to users by their email
module.exports = function(sequelize, DataTypes) {
  var savedArticles = sequelize.define("User", {
    // User email, used to attach to registered users
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // Link to the saved article
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },

    // boolean value to tell if the article has been saved or not
    saved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return savedArticles;
};  