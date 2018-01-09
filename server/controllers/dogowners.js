const DogOwner = require('../models').DogOwner;

module.exports = {
  create(req, res) {
    return DogOwner
      .create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        city: req.body.city,
        postcode: req.body.postcode,
        status: req.body.status
      })
      .then(dogowner => res.status(201).send(dogowner))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return DogOwner
      .all()
      .then(dogowners => res.status(200).send(dogowners))
      .catch(error => res.status(400).send(error));
  }
};
