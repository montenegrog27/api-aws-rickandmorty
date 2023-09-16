const { User } = require("../DB_connections");

const postUser = async (datos) => {
  const { name, email, password } = datos;
  //console.log(datos);
  if (!name || !password || !email) {
    return { message: "Datos Basicos incompletos" };
  }

  const newUser = await User.create({
    name,
    email,
    password: "",
  });
  return newUser;
};

module.exports = { postUser };
