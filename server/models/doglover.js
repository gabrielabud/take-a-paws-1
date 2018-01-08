'use strict';
module.exports = (sequelize, DataTypes) => {
  var DogLover = sequelize.define('DogLover', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return DogLover;
};