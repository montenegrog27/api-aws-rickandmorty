//! //!Comentado todo para la ultima hw de sequelize que pide que lo elimine

// let myFavorites = [];

// function postFav(req, res) {
//   //?guardo lo que viene por body en una variable:
//   const character = req.body;

//   //?pusheo a mi arreglo myFavorites:
//   myFavorites.push(character);
//   res.status(200).json(myFavorites);
// }

// function deleteFav(req, res) {
//   //? guardo lo que viene por params en una variable
//   const { id } = req.params;

//   //? Filtro el arreglo myFavorites, "quiero quedarme con todos los que no coincidan con el id" osea eliminar el personaje del arreglo
//   const filtered = myFavorites.filter((char) => char.id !== Number(id));

//   //? Para sustituir el arreglo hacemos:
//   myFavorites = filtered;
//   res.status(200).json(myFavorites);
// }

// module.exports = { postFav, deleteFav };

//! hw de sequelize 2
const { Favorite } = require("../DB_connections");

const postFav = async (req, res) => {
  const { id, name, status, species, origin, image, gender } = req.body;
  console.log(req.body);
  try {
    if (name && status && species && origin && image && gender) {
      await Favorite.findOrCreate({
        where: { id, name, status, species, origin, image, gender },
      });

      const myFavorites = await Favorite.findAll();
      return res.status(201).json(myFavorites);
    }
    return res.status(401).json({ message: "Faltan datos" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

async function deleteFav(req, res) {
  const { id } = req.params;

  try {
    await Favorite.destroy({ where: { id: id } });

    const favs = await Favorite.findAll();

    return res.status(200).json(favs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { postFav, deleteFav };
