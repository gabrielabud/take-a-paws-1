module.exports = (sequelize, DataTypes) => {
  const Dog = sequelize.define('Dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Dog.associate = (models) => {
    Dog.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Dog;
};
