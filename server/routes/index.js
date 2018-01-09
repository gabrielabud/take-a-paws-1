const dogownersController = require('../controllers').dogowners;
const dogsController = require('../controllers').dogs;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to take a paws!',
  }));

  app.post('/api/dogowners', dogownersController.create);
  app.get('/api/dogowners', dogownersController.list);
  app.post('/api/dogowners/:dogownerId/dogs', dogsController.create);
  app.get('/api/dogs', dogsController.list);
};
