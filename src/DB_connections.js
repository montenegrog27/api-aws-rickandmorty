require("dotenv").config();
require("pg");
const { Sequelize } = require("sequelize");
const { DB_DEPLOY } = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false,
  native: false,
});

FavoriteModel(sequelize);
UserModel(sequelize);
//
const { User, Favorite, UserFavorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "user_id" });
UserFavorite.belongsToMany(User, {
  through: Favorite,
  foreignKey: "favorite_id",
});

module.exports = {
  User,
  Favorite,
  UserFavorite,
  conn: sequelize,
};
