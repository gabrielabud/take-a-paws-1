const DogOwner = require('../models').DogOwner;

module.exports = {
  create(req, res) {
    return DogOwner
      .create({
        name: req.body.name,
      })
      .then(dogowner => res.status(201).send(dogowner))
      .catch(error => res.status(400).send(error));
  },
};
