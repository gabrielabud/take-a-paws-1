const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const passport = require('passport');
const session = require('express-session');
const env = require('dotenv').load();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));  /* Check making it true */

app.use(session({ secret: 'take-a-paws', resave: true, saveUninitialized:true }));
app.use(passport.initialize());
app.use(passport.session());

require('./server/routes')(app);

app.get('*', (req, res) => res.status(200).send({
  message: "Welcome to Majd's world"
}));

module.exports = app;
