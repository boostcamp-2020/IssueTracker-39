const passport = require('passport');
const gitHubStrategy = require('passport-github').Strategy;
const DB = require('../../models/index');
// module.exports = passport;
module.exports = () => {
  passport.use(
    new gitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: `${process.env.baseURL}/`,
        scope: ['users:userId'],
      },
      function (accessToken, refreshToken, profile, cb) {
        const where = {where: {github: profile.id}};
        DB.users.findOrCreate(where, function (err, user) {
          if (user) {
            //?
          }
          return cb(err, user);
        });
      },
    ),
  );
};
