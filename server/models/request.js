'use strict';
module.exports = (sequelize, DataTypes) => {
  var Request = sequelize.define('Request', {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        Request.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
        Request.belongsTo(models.Dog, {
          foreignKey: 'DogId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Request;
};
