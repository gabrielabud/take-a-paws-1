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
      .findAll({
        where: { dogId: req.params.dogId}
      }).then(requests =>
        res.status(200).send(requests))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Request
      .findAll({
        where: { dogId: req.params.dogId, userId: req.params.userId }
      }).then(requests =>
        res.status(200).send(requests))
      .catch(error => res.status(400).send(error));
  },


  update(req, res) {
  return Request
    .findById(req.params.requestId)
    .then(request => {
      if (!request) {
        return res.status(404).send({
          message: 'Request Not Found',
        });
      }
      return request
        .update({
          status: req.body.status || request.status,
        })
        .then(() => res.status(200).send(request))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
};
