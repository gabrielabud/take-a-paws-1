const Message = require('../models').Message;

module.exports = {
  create(req, res) {
    return Message
      .create({
        message: req.body.message,
        sender: req.body.senderId,
        receiver: req.body.receiverId
      })
      .then(message => res.status(201).send(message))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Message
      .all()
      .then(messages => res.status(200).send(messages))
      .catch(error => res.status(400).send(error));
  }
};
