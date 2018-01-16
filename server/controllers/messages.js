const Message = require('../models').Message;
const User = require('../models').User;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
    const senderId = req.query.senderId;
    const receiverId = req.query.receiverId;
    return Message
    .findAll({
      where: {
        sender: {
          [Op.or]: [senderId, receiverId]
        },
        receiver: {
          [Op.or]: [senderId, receiverId]
        }
      }
    })
      .then(messages => res.status(200).send(messages))
      .catch(error => res.status(400).send(error));
  },

  getNames(req, res) {
    const receiverId = req.query.receiverId;
    return Message
    .findAll({
      where: {
        receiver: receiverId
      }
    })
      .then(messages => res.status(200).send(messages))
      .catch(error => res.status(400).send(error));
  }

};
