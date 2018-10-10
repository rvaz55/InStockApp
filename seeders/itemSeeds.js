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
    itemName: "Kewpie Mayo",
    price: 3,
    quantity: 5,
    weight: 11,
    weightMeasuredIn: "oz",
    carriedByStores:[1,2],
    store:"Viet Hoa International Foods",
    address: "8300 W Sam Houston Pkwy S #100, Houston, TX 77072"
  },
  {
    itemName: "Curry leaves",
    price: 3,
    quantity: 5,
    weight: 11,
    weightMeasuredIn: "oz",
    carriedByStores:[1,2],
    store:"Indian Groceries & Spices Inc",
    address: "Address: 4007 Ade St, Houston, TX 77063"
  },
  {
    itemName: "Valentina Mexican Hot Sauce",
    price: 3,
    quantity: 5,
    weight: 11,
    weightMeasuredIn: "oz",
    carriedByStores:[1,2],
    store: "La Michoacana Meat Market",
    address: "5902 N Shepherd Dr, Houston, TX 77091",
    phone: "713-694-8649"
  },
  {
    "itemName": "Badia Cinnamon Sticks Mexican",
    price: 3.4,
    category: "spice",
    store: "La Michoacana Meat Market",
    address: "5902 N Shepherd Dr, Houston, TX 77091",
    phone: "713-694-8649"
 },
{
    itemName: "Badia Cinnamon Sticks Mexican",
    price: 4.5,
    category: "spice",
    store: "La Michoacana Meat Market",
    address: "0937 FM 1960, Houston, TX 77070",
    phone: "281-807-0981"
},
{
    itemName: "Badia Cinnamon Sticks Mexican",
    price: 5.6,
    category: "spice",
    store: "La Michoacana Meat Market",
    address: "11655 Veterans Memorial Dr, Houston, TX 77067",
    phone: "281-893-0694"
},
{
    itemName: "El Yucateco Paste Achiote",
    price: 8,
    category: "spice",
    store: "La Michoacana Meat Market",
    address: "1002 Boundary St, Houston, TX 77009",
    phone: "713-223-3837"
},
{
    itemName: "El Yucateco Paste Achiote",
    price: 9,
    category: "spice",
    store: "La Michoacana Meat Market",
    address: "3012 Hillcroft St, Houston, TX 77057",
    phone: "281-974-2632"
},
{
    itemName: "El Yucateco green habanero",
    price: 3.4,
    category: "condiment",
    store: "La Michoacana Meat Market",
    address: "5902 N Shepherd Dr, Houston, TX 77091",
    phone: "713-694-8649"
},
{
    itemName: "El Yucateco green habanero",
    price: 4.5,
    category: "condiment",
    store: "La Michoacana Meat Market",
    address: "0937 FM 1960, Houston, TX 77070",
    phone: "281-807-0981"
},
{
    itemName: "El Yucateco green habanero",
    price: 5.6,
    category: "condiment",
    store: "La Michoacana Meat Market",
    address: "11655 Veterans Memorial Dr, Houston, TX 77067",
    phone: "281-893-0694"
},
{
    itemName: "El Yucateco green habanero",
    price: 8,
    category: "condiment",
    store: "La Michoacana Meat Market",
    address: "1002 Boundary St, Houston, TX 77009",
    phone: "713-223-3837"
},
{
    itemName: "El Yucateco green habanero",
    price: 9,
    category: "condiment",
    store: "La Michoacana Meat Market",
    address: "3012 Hillcroft St, Houston, TX 77057",
    phone: "281-974-2632"
},
{
  itemName: "Banana leaves",
  price: 9,
  category: "condiment",
  store: "La Michoacana Meat Market",
  address: "3012 Hillcroft St, Houston, TX 77057",
  phone: "281-974-2632"
}
];

// itemSeed.forEach(each => {
//     db.Item.create([ each ])
//     .then(each => {
//     console.log(data.result.n + " records inserted!")
//   })
//     .catch(err => console.log(err))
// })
