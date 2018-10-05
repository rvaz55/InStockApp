const mongoose = require("mongoose");
const Schema = mongoose.Schema;
autoIncrement = require('mongoose-auto-increment');

const storeSchema = new Schema({
  storeName: { type: String, required: true },
  store_id: { type: String, required: true },
  storeAddress: {type:String, required: true},
  storeCity:{type: String, required: true},
  storeState:{type:String, required: true},
  storeZip: {type: Number, required:true},
  storePhone: {type: Number, required: true},
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
