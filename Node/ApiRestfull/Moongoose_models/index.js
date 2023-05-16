const { connect } = require('./src/utils/db')
const dotenv = require('dotenv')

// Create the Web Server
const express = require("express");

dotenv.config();

// DB connection
connect()

const server = express()

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Listening on PORT http://localhost:${PORT}`);
});
