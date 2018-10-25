const db = require("../models");

module.exports = { 
  findByEmail: function(req, res) {
    console.log(req.params.email)
    db.Store
      .findOne({email:req.params.email})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    findById: function(req, res) {
      // console.log(req.body)
      // console.log(req.params)
      // console.log(res)
      db.Store
        .findById(req.params.storeid)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.Store
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    addItemToInventory: function(req, res) {
      //console.log(req.params)
      db.Item
          .find({ "itemName": req.params.itemName})
          .sort({ itemName: 1 })
          .then(itemsModel => {
            //console.log(`this is the dbModel:`)
            //console.log(itemsModel); 
            //If after checking the Item collection and verifying that the item (in this case called the 'dbModel)
            //doesn't exist then the 'else' is triggered and the item is creted in the Items collection            
            if (itemsModel.length === 0) {
              console.log("happens here")
              console.log(req.params)
              //console.log(req.params._id)
                db.Item
                  .create({itemName: req.params.itemName, category: req.params.category, carriedByStores:[{storeID: req.params._id}]})
                  .then(itemModel => { 
                    //console.log("happens in the storesController.js")
                    //console.log(itemModel._id)
                    //console.log(req.params)
                        db.Store.findByIdAndUpdate(req.params._id, {$push: {stockedItems:[{
                                                                    itemName:req.params.itemName, 
                                                                    price:req.params.price,
                                                                    category: req.params.category,
                                                                    itemID: itemModel._id
                                                                  }]} })
                                .catch(err => res.status(422).json(err));
                  })
                  .then(dbModel => res.json(dbModel))
                  

            } 
            else {
              console.log(itemsModel[0]._id)
              console.log(req.params)
              db.Item
                .findByIdAndUpdate( itemsModel[0]._id,{ $push: { carriedByStores: [{storeID: req.params._id}]} })
                .then(itemModel => db.Store
                  .findByIdAndUpdate(req.params._id, {$push: {stockedItems:[{
                                                              itemName:req.params.itemName, 
                                                              price:req.params.price,
                                                              category: req.params.category,
                                                              itemID: itemModel._id
                                                            }]} })
                  //.then(dbModel => res.json(dbModel))
                  .catch(err => res.status(422).json(err))
                  )

            } 

            return res.json(itemsModel)
          })
          .catch(err => res.status(422).json(err));

    },
    deleteItemFromInventory: function(req, res) {

      db.Store
        .findByIdAndUpdate( req.params._id,
          { $pull: { stockedItems: [req.params.itemName]}},
          { 'new': true },
          function(error, doc) {
            console.log('Error: ' + error);
            console.log(JSON.stringify(doc));
            process.exit(0);
          }
          )
        .then(itemModel => db.Store)
        .catch(err => res.status(422).json(err));

    }
  }; 