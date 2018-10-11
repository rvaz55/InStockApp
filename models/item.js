const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');


// added address and store to the items table
const itemSchema = new Schema({
  // item_id:{type:Number, unique:true},
  itemName: { type: String, required: true },
  price: { type: Number, required: false},
  quantity: { type: Number, required: false},
  weight: { type: String, required: false},
  weightMeasuredIn: { type: String, required: false },
  carriedByStores: [{ type: Number, required: false}],
  category: {type: String, required: false},
  categories: [{ type: Number, required: false}],
  date: { type: Date, default: Date.now, required: false },
  store: { type: String, required: false },
  address: { type: String, required: false }
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