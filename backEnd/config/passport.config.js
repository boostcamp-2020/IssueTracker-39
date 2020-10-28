const passport = require('passport');
const githubStrategy = require('passport-github2').Strategy;
require('dotenv').config();

passport.use(
  new githubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.baseURL + process.env.callBackURL,
      scope: ['user:email'],
    },
    function (accessToken, refreshToken, profile, done) {
      profile.accessToken = accessToken;
      done(null, profile);
    },
  ),
);

module.exports = passport;
