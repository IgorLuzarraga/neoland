const mongoose = require("mongoose");

// Types of our data model
const Schema = mongoose.Schema;

// We create the data model
// 1. type: data type ('string, number, ...)
// 2. required: if the data is required or not
const CountrySchema = new Schema(
  {
    country: { type: String, required: true },
    capital: { type: String, required: true },
    population: { type: Number, required: false },
    image: { type: String },
  },
  {
    timestamps: true,
  }
)

// we create the data schema model for mongoose
const Country = mongoose.model("Country", CountrySchema)

module.exports = Country
