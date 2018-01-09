module.exports = (sequelize, DataTypes) => {
  const DogOwner = sequelize.define('DogOwner', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },

    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    postcode: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    status: {
      type: Sequalize.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });

  DogOwner.associate = (models) => {
    DogOwner.hasMany(models.Dog, {
      foreignKey: 'dogownerId',
      as: 'dogs',
    });
  };
  return DogOwner;
};
