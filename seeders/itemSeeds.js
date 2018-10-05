const mongoose = require("mongoose");
const db = require("../models");
autoIncrement = require('mongoose-auto-increment');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/instock_devDB"
);

const itemSeed = [
  {
    itemName: "Hot Sauce",
    price: 3,
    quantity: 5,
    weight: 11,
    weightMeasuredIn: "oz",
    carriedByStores:[1,2]
  },
  {
    item_id:{},
    itemName: "Potatoes",
    weight: 5,
    weightMeasuredIn: "lbs"
  }
];

db.Item
  .deleteMany({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});