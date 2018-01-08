'use strict';
module.exports = (sequelize, DataTypes) => {
  var DogOwner = sequelize.define('DogOwner', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return DogOwner;
};