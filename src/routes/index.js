// const login = require("../controllers/login");
const { Router } = require("express");
const router = Router();
const { deleteFav, postFav } = require("../controllers/handleFavorites");
const { postUser } = require("../controllers/postUser");
const getCharById = require("../controllers/getCharById");

//? Aca le pasamos: 1_get, 2_ la ruta, 3_ el controlador

router.get("/character/:id", getCharById);
router.post("/login", postUser);
// router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
