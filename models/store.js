const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  storeName: { type: String, required: false },
  email: {type: String, required: true, unique: true},
  store_id: { type: String, required: false },
  storeAddress: {type:String, required: false},
  storeCity:{type: String, required: false},
  storeState:{type:String, required: false},
  storeZip: {type: Number, required:false},
  storePhone: {type: Number, required: false},
  stockedItems: [{
    itemName: {type:String, require: false},
    price: {type:Number, require: false},
    category: {type:String, require: false},
    itemID: { type: Schema.Types.ObjectId, ref:"Stores", required: false},
    _id:false
  }]
});


const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
