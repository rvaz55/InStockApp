const mongoose = require("mongoose");
const db = require("../models");
autoIncrement = require('mongoose-auto-increment');

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/instock_devDB"
);

const storeSeed = [
  {
    storeName: "La Michoacana",
    storesAddress:"100 Muffin Lane",
    email: 'storename@gmail.com',
    storeCity: "Houston",
    storeState: "TX",
    storeZip:"77074",
    storePhone:"7135551234",
    date: new Date(Date.now())
  },
  {
    storeName: "H-Mart",
    email: 'hotcheetos@gmail.com',
    storesAddress:"102 Parker St",
    storeCity: "Houston",
    storeState: "TX",
    storeZip:"72940",
    storePhone:"7134442222",
    date: new Date(Date.now())
  }
];

db.Store.deleteMany({})

storeSeed.forEach(each => {
    db.Store.create([ each ])
    .then(each => {
    console.log(each + " records inserted!")
  })
    .catch(err => console.log(err))
})