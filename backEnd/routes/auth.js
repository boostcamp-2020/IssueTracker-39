const express = require('express');
const router = express.Router();
const passport = require('../config/passport.config');
const {findUserOrCreate, makeToken} = require('../service/auth');

router.get(
  '/github',
  passport.authenticate('github', {session: false, scope: ['user:email']}),
);

router.get(
  '/github/call',
  passport.authenticate('github', {session: false, failureRedirect: '/wrong'}),
  async function (req, res) {
    console.log('im call back');
    console.log('user', req.user.emails[0]);

    const user = await findUserOrCreate(req.user.emails[0].value);
    const token = makeToken(user);

    res.cookie('token', token);
    res.redirect('/');
  },
);

router.post('/login', (req, res, next) => {});

module.exports = router;
