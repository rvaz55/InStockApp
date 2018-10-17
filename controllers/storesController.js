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
            if (itemsModel.length ===0) {

                db.Item
                  .create({itemName: req.params.itemName, category: req.params.category, carriedByStores:[req.params._id]})
                  .then(itemModel => { 
                    //console.log(itemModel)
                    db.Store
                        .findByIdAndUpdate(req.params._id, {$push: {stockedItems:[{
                                                                    itemName:req.params.itemName, 
                                                                    price:req.params.price,
                                                                    category: req.params.category,
                                                                    itemID: itemModel._id
                                                                  }]} })
                        .then(dbModel => res.json(dbModel))
                  })

            } 
            else {
              console.log(itemsModel[0]._id)
              db.Item
                .findByIdAndUpdate( itemsModel[0]._id,{ $push: { carriedByStores: req.params.itemName} })
                .then(itemModel => db.Store
                  .findByIdAndUpdate(req.params._id, {$push: {stockedItems:[{
                                                              itemName:req.params.itemName, 
                                                              price:req.params.price,
                                                              category: req.params.category,
                                                              itemID: itemModel._id
                                                            }]} })
                  .then(dbModel => res.json(dbModel)))
            } 

            return res.json(dbModel)
          })
          .catch(err => res.status(422).json(err));

    }
  }; 