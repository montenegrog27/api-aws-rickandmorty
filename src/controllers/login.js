//! //! //!Comentado todo para la ultima hw de sequelize que pide que lo elimine

// const axios = require("axios");
// const user = require("../utils/users");

// function login(req, res) {
//   //?destructuring de lo que recibo por query:
//   const { email, password } = req.query;

//   //?const found p encontrar coincidencia de lo que me pasan por query y el user traido de user
//   const found = user.find(
//     (user) => user.email === email && user.password === password
//   );

//   //?si existe found, devolver un json acces true, sino un false
//   if (found) {
//     res.status(200).json({ access: true });
//   } else res.status(200).json({ access: false });
// }
// module.exports = login;

//! hw de sequelize 2
const { User } = require("../DB_connections");

async function login(req, res) {
  const { email, password } = req.query;

  try {
    if (!email || !password) return res.status(400).send("Faltan datos");

    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }
    return user.password === password
      ? res.status(200).json({ access: true })
      : res.status(403).send("Contraseña incorrecta");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = login;
