const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;
  try {
    const response = (await axios.get(`${URL}${id}`)).data;
    const character = {
      id: response.id,
      name: response.name,
      gender: response.gender,
      species: response.species,
      origin: response.origin,
      image: response.image,
      status: response.status,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getCharById;
