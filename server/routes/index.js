const dogownersController = require('../controllers').dogowners;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to take a paws!',
  }));

  app.post('/api/dogowners', dogownersController.create);
};
