// const { User } = require("../DB_connections");

// const postUser = async (req, res) => {
//   const { email, password } = req.body;
const { User } = require("../DB_connections");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("Faltan datos");
  }
  try {
    const user = await User.findOrCreate({
      where: { email, password },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { postUser };
