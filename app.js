const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const fileParser = require('connect-multiparty')();
require('dotenv').config()

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
})

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);

app.post('/upload', fileParser, function(req, res){
  var imageFile = req.files.image;
  cloudinary.uploader.upload(imageFile.path);
  res.status(200).send({
    message: "Welcome to Majd's world"
  })
});

app.get('*', (req, res) => res.status(200).send({
  message: "Welcome to Majd's world"
}));

module.exports = app;
