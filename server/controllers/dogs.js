const Dog = require('../models').Dog;

module.exports = {
  create(req, res) {
    return Dog
    .create({
      name: req.body.name,
      dogownerId: req.params.dogownerId,
    })
    .then(dog => res.status(201).send(dog))
    .catch(error => res.status(400).send(error));
  },
};
