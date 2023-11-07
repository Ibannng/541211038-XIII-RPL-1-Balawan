// getting-started.js
const mongoose = require("mongoose");

//ini merupakan codingan untuk menghubungi Database
const mongoDB = async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/praktikumkk4");
  console.log("DB Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};

module.exports = mongoDB;
