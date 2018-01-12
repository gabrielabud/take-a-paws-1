const Request = require('../models').Request;

module.exports = {
  create(req, res) {
    return Request
      .create({
        status: req.body.status,
        userId: req.params.userId,
        dogId: req.params.dogId
      })
      .then(request => res.status(201).send(request))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Request
      .all()
      .then(requests => res.status(200).send(requests))
      .catch(error => res.status(400).send(error));
  }
};
