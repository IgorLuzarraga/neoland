const { configCloudinary } = require("./src/middleware/files.middleware");
const { connect } = require("./src/utils/db");
const express = require("express");
const dotenv = require("dotenv");

//! -----ROUTES-----------
const CharacterRoutes = require("./src/api/routes/Character.routes");
const MovieRoutes = require("./src/api/routes/Movie.routes");

dotenv.config();

// DB connection
connect();

// Create the Web Server
const server = express();

configCloudinary();
const PORT = process.env.PORT;

// Send and recive data limitation
server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: true }));

server.use("/api/v1/character/", CharacterRoutes);
server.use("/api/v1/movies/", MovieRoutes);

// If the user don't introduce any route
server.use("*", (req, res, next) => {
  const error = new Error("Route not found Dude!");
  error.status = 404;
  return next(error);
});

//! ERRO 500 DEL SERVER
server.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error")
})

// The server starts running in the port PORT, and waits for a request
server.disable("x-powered-by")
server.listen(PORT, () => {
  console.log(`Listening on PORT http://localhost:${PORT}`)
})
