const usersController = require('../controllers').users;
const dogsController = require('../controllers').dogs;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to take a paws!',
  }));

  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.post('/api/users/:userId/dogs', dogsController.create);
};
