const express = require('express');
const app = express();

const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').load();

const logger = require('morgan');
app.use(logger('dev'));


app.use(bodyParser.urlencoded({ extended: true }));  /* Check making it true */
app.use(bodyParser.json());

app.use(session({ secret: 'take-a-paws', resave: true, saveUninitialized:true }));
app.use(passport.initialize());
app.use(passport.session());

const models = require('./server/models');

const authRoute = require('./server/routes/auth.js')(app, passport);

require('./server/routes')(app);
require('./server/config/passport/passport.js')(passport, models.User);


app.get('*', (req, res) => res.status(200).send({
  message: "Welcome to Majd's world"
}));

module.exports = app;
