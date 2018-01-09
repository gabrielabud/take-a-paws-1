module.exports = (sequelize, Sequelize) => {
  const DogOwner = sequelize.define('DogOwner', {
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },

    username: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    postcode: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    status: {
      type: Sequelize.ENUM('active', 'inactive'),
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
