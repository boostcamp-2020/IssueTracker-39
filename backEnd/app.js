const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('./config/passport.config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const apiRouter = require('./routes/api');

const sequelize = require('./models/index').sequelize;
sequelize.sync();
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(passport.initialize());

const jwtAuthenticate = passport.authenticate('jwt', {session: false});

app.use('/', indexRouter);
app.use('/api/auth', authRouter);
app.use('/users', usersRouter);
app.use('/api', jwtAuthenticate, apiRouter);

module.exports = app;
