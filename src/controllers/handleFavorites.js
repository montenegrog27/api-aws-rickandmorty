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
