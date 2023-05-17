const { upload } = require("../../middleware/files.middleware");
const {
  create,
  deleteCharacter,
  getAll,
  getById,
  getByName,
  updateCharacter,
} = require("../controllers/Character.controllers")

const CharacterRoutes = require("express").Router()

// CREATE
CharacterRoutes.post("/", upload.single("image"), create)

// DELETE
CharacterRoutes.delete("/:id", deleteCharacter);

// GETALL
CharacterRoutes.get("/", getAll)

// GETBYID
CharacterRoutes.get("/:id", getById)

// GETBYNAME
CharacterRoutes.get("/name/:name", getByName)

// UPDATE
CharacterRoutes.patch("/:id", upload.single("image"), updateCharacter)

module.exports = CharacterRoutes
