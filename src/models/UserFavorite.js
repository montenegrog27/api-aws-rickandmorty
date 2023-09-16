const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "UserFavorite",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      favorite_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
