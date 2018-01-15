module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define('Message', {
    message: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    sender: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    receiver: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    senderName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    receiverName: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });

  return Message;
};
