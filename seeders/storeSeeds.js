const mongoose = require("mongoose");
const db = require("../models");
autoIncrement = require('mongoose-auto-increment');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/instock_devDB"
);

const storeSeed = [
  {
    storeName: "La Michoacana",
    storesAddress:"100 Muffin Lane",
    storeCity: "Houston",
    storeState: "TX",
    storeZip:"77074",
    storePhone:"7135551234",
    date: new Date(Date.now())
  },
  {
    storeName: "H-Mart",
    storesAddress:"102 Parker St",
    storeCity: "Houston",
    storeState: "TX",
    storeZip:"72940",
    storePhone:"7134442222",
    date: new Date(Date.now())
  }
];

db.Store
  // .db.Store.collection.dropIndexes(function (err, results) {
  //   console.log(err)})
  .deleteMany({})
  .then(() => db.Store.collection.insertMany(storeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
