const { upload } = require("../../middleware/files.middleware");
const {
  create,
  deleteCountry,
  getAll,
  getById,
  getByCapital,
  updateCountry,
} = require("../controllers/Country.controllers")

const CountryRoutes = require("express").Router()

// CREATE
CountryRoutes.post("/", upload.single("image"), create)

// DELETE
CountryRoutes.delete("/:id", deleteCountry);

// GETALL
CountryRoutes.get("/", getAll)

// GETBYID
CountryRoutes.get("/:id", getById)

// getByCapital
CountryRoutes.get("/capital/:capital", getByCapital)

// UPDATE
CountryRoutes.patch("/:id", upload.single("image"), updateCountry)

module.exports = CountryRoutes
