const passport = require('passport');
const githubStrategy = require('passport-github2').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
require('dotenv').config();

const {users} = require('../models/index');

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
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (jwtPayload, done) => {
      return users
        .findByPk(jwtPayload.idx)
        .then((user) => {
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    },
  ),
);
module.exports = passport;
