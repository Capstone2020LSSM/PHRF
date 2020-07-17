module.exports = (sequelize, DataTypes) => {
  return sequelize.define('account', {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(355),
      allowNull: false,
      unique: true,
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    timestamps: false,
  });
};