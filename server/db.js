const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DBNAME = process.env.MONGO_DBNAME;

const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@maincluster.fkqkw.mongodb.net/${MONGO_DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(url, { useNewUrlParser: true })
  .then((res) => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => console.log("Failed to connect to MongoDB!"));
