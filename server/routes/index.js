const usersController = require('../controllers').users;
const dogsController = require('../controllers').dogs;
const requestsController = require('../controllers').requests;
const fileParser = require('connect-multiparty')();

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to take a paws!',
  }));

  app.post('/api/users/:userId/dogs', fileParser, dogsController.create);
  app.get('/api/dogs', dogsController.list);
  app.get('/api/dogs/:dogId', dogsController.retrieve);
  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.post('/api/users/:userId/:dogId/requests', requestsController.create);
  app.get('/api/:dogId/requests', requestsController.list);
};
