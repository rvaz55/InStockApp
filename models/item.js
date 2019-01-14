const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// added address and store to the items table
const itemSchema = new Schema({
  // item_id:{type:Number, unique:true},
  itemName: { type: String, required: false },
  //price: { type: Number, required: false},
  //quantity: { type: Number, required: false},
  //weight: { type: String, required: false},
  //weightMeasuredIn: { type: String, required: false },
  carriedByStores: [{ storeID: {type: Schema.Types.ObjectId, ref:"Stores", required: false}, _id: false, 
                  itemPrice: {type: Number, ref:"Stores", required: true}}],
  category: {type: String, required: false},
  //categories: [{ type: Number, required: false}],
  //date: { type: Date, default: Date.now, required: false },
  //storeName: { type: String, required: false },
  //storesid: {type: String, required: false },
  //storeAddress: { type: String, required: false },
  photo: { type: String, required: false}
});


const Item = mongoose.model("Item", itemSchema);

module.exports = Item;