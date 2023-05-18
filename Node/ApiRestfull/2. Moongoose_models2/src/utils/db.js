// We need to use dotenv to get the MongoDb URI, that is located in
// the .env file (we don't share this file)
const dotenv = require("dotenv");

// We use this library to control the MongoDB data base
const mongoose = require("mongoose");

dotenv.config();

// Mongo URI from the .env file
const MONGO_URI = process.env.MONGO_URI;

// Function that made the connection with the data base
const connect = async () => {
    try {
      const db = await mongoose.connect(MONGO_URI, {
        // Parse Mongo URI
        useNewUrlParser: true,
        // Convert special characters
        useUnifiedTopology: true,
      })
  
      // We get the name and the host of the DB
      const { name, host } = db.connection
  
      console.log(
        `DB connected 👌 host: ${host} name: ${name}`
      )
    }
    catch (error) {
      console.log("Error connecting to the DB! 😣")
    }
}

module.exports = { connect }