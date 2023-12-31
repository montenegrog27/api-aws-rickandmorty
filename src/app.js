const express = require("express");
const server = express();
const cors = require("cors");
const router = require("./routes/index");

server.use(express.json());
server.use(cors());

server.use("/", router);
module.exports = server;
