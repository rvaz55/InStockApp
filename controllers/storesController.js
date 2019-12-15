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
              //console.log(req.params)
              //console.log(req.params._id)
                db.Item
                  .create({itemName: req.params.itemName, category: req.params.category, carriedByStores:[{storeID: req.params._id, itemPrice: req.params.price }]})
                  .then(itemModel => { 
                    //console.log("happens in the storesController.js")
                    //console.log(itemModel._id)
                    console.log(req.params)
                    console.log(itemModel)
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
              console.log("tracking an error when saving the price of an existing item")
              db.Item
                .findByIdAndUpdate( itemsModel[0]._id,{ $push: { carriedByStores: [{storeID: req.params._id , itemPrice: req.params.price}]} })
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
      console.log("happpppens in the storesController")
      console.log(req.params)

      
      /////////////
      /////////////
      ////////////
      ///////////The findoneandupdate needs to be replaced by Mongoose lingo like on line 7, 16 & 22
      //////////
      /////////
      ////////
      ///////
      //////
      /////
      ////
      ///
      //

      //grab existing document at storeID
      //loop through items array until itemId is found
      //remove that index with arr.splice(index,index)
      //update the document with new database object.
      //possible errors to catch: 
      //if item id doesnt exist send back a message
      //if store id doesnt exist send something back
      db.Store.findById(req.params.storeId).then((response)=>{
        let itemExists = false;
        let index = 0;
        console.log(req.params.itemId)
        response.stockedItems.forEach((element,i) => {
          if(element.itemID==req.params.itemId)
          {
            itemExists=true;
            index=i;
          }
        })
        if(itemExists)
        {
          response.stockedItems.splice(index,1);
          console.log(response);
          db.Store.findOneAndUpdate(req.params.storeId,response,{'new':true}).then((response=>{
            console.log(response)
            res.json(response)
          })).catch(err=>{
           console.log(err);
            res.status(422).json(err);
          });
        }
      })

      /*db.Store
        .findOneAndUpdate( req.params.storeId,
          { $pull: { stockedItems: [{itemID: req.params.itemId}]}},
          { 'new': true }
          //,
          //function(error, doc) {
          //  console.log('Error: ' + error);
          //  //console.log(JSON.stringify(doc));
          //  //process.exit(0);
          //}
          )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));*/

    }
  }; 