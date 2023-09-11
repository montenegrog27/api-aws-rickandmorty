// const axios = require("axios");

// function getCharById(res, id) {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       const { id, name, gender, species, origin, image, status } =
//         response.data;
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(
//         JSON.stringify({ id, name, gender, species, origin, image, status })
//       );
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(error.message);
//     });
// }

// module.exports = getCharById;
//! SE ELIMINA TODO PARA HW DE EXPRESS:
const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

//! Comento esta funcion para hacer la hw de ASYNC AWAIT
// function getCharById(req, res) {
//   const { id } = req.params;
//   axios
//     .get(`${URL}${id}`)
//     .then((response) => {
//       const { name, gender, species, origin, image, status } = response.data;
//       const character = { id, name, gender, species, origin, image, status };
//       // console.log(character.id);
//       if (character.name) {
//         res.status(200).json(character);
//         console.log(character);
//       } else res.status(404).send("Not Found");
//       // res.json(character);
//     })
//     .catch((error) => {
//       res.status(500).json({ message: error.message });
//     });
// }
//! HW Async await , hacer la misma funcion con async await:
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
