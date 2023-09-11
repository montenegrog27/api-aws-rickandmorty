const login = require("../controllers/login");
const { deleteFav, postFav } = require("../controllers/handleFavorites");
const getCharById = require("../controllers/getCharById");
const { Router } = require("express");
const { postUser } = require("../controllers/postUser");
const router = Router();

//?Crear una ruta para cada controlador con los sgtes paths:
// GET getCharById: "/character/:id"
// GET login: "/login"
// POST postFav: "/fav"
// DELETE deleteFav: "/fav/:id"

//? Aca le pasamos: 1_get, 2_ la ruta, 3_ el controlador

router.get("/character/:id", getCharById);
router.post("/login", postUser);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
