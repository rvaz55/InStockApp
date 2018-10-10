const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');


// added address and store to the items table
const itemSchema = new Schema({
  // item_id:{type:Number, unique:true},
  itemName: { type: String, required: true },
  price: { type: Number},
  quantity: { type: Number},
  weight: { type: String},
  weightMeasuredIn: { type: String },
  carriedByStores: [{ type: Number}],
  category: {type: String},
  categories: [{ type: Number}],
  date: { type: Date, default: Date.now },
  store: { type: String },
  address: { type: String }
});

//autoIncrement.initialize(mongoose.connection);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

//itemSchema.plugin(autoIncrement.plugin, 'Item');

// itemSchema.plugin(autoIncrement.plugin, {
//   model: 'itemSchema',
//   field: 'item_id',
//   startAt: 100,
//   incrementBy: 100
// });