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
    stockedItems:[{itemName:"oranges", price: 2 , itemID:"123"},
                  {itemName:"bananas", price: 2 , itemID:"124"},
                  {itemName:"cinnamon sticks", price: 5 , itemID:"125"},
                ],
    storeCity: "Houston",
    storeState: "TX",
    storeZip:"77074",
    storePhone:"7135551234",
    date: new Date(Date.now())
  },
  {
    storeName: "H-Mart",
    email: 'hotcheetos@gmail.com',
    stockedItems:[{itemName:"shrimp chips", price: 7 , category:'snack'},
                  {itemName:"bananas", price: 2 },
                  {itemName:"cinnamon sticks", price: 5 },
                  {itemName:"moon cakes", price: 3 }
                ],
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