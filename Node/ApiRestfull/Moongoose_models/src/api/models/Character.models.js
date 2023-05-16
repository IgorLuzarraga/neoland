const mongoose = require("mongoose");

// Types of our data model
const Schema = mongoose.schema;

// We create the data model
// 1. type: data type ('string, number, ...)
// 2. required: if the data is required or not
const CharacterSchema = new Schema(
  {
    name: { type: String, required: true },
    gender: {
      type: String,
      enum: ["female", "male", "fluid"],
      required: true,
    },
    age: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
)

// we create the data schema model for mongoose
const Character = mongoose.model("Character", CharacterSchema)

module.exports = Character
