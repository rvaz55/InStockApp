const mongoose = require("mongoose");
const Schema = mongoose.Schema;
autoIncrement = require('mongoose-auto-increment');

const storeSchema = new Schema({
  storeName: { type: String, required: false },
  storeid: { type: String, required: false },
  storeAddress: {type:String, required: false},
  storeCity:{type: String, required: false},
  storeState:{type:String, required: false},
  storeZip: {type: Number, required:false},
  storePhone: {type: Number, required: false},
  stockedItems: {}
});

//storeSchema.plugin(autoIncrement.plugin, 'Store');
//const Store = connection.model('Store', storeSchema);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;

autoIncrement.initialize(mongoose.connection);

storeSchema.plugin(autoIncrement.plugin, {
    model: 'storeSchema',
    field: 'store_id',
    startAt: 1,
    incrementBy: 1
});