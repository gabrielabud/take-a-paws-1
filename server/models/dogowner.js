module.exports = (sequelize, DataTypes) => {
  const DogOwner = sequelize.define('DogOwner', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  DogOwner.associate = (models) => {
    DogOwner.hasMany(models.Dog, {
      foreignKey: 'dogownerId',
      as: 'dogs',
    });
    
  return DogOwner;
};
