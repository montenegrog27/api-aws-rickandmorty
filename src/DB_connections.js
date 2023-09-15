require("dotenv").config();
require("pg");
const { Sequelize } = require("sequelize");
const { DB_DEPLOY } = process.env;

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false,
  native: false,
});

//? importamos modelos

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${BDD}`,
//   {
//     logging: false,
//   }
// );

// FavoriteModel(sequelize);
// UserModel(sequelize);
//
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

const FavoriteModel = require("./models/Favorite")(sequelize, Sequelize);
const UserModel = require("./models/User")(sequelize, Sequelize);

module.exports = {
  sequelize,
};
