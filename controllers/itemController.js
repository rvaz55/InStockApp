const db = require("../models");

module.exports = {
    // where itemName INCLUDES the search 
    findBySearch: function (req, res) {
        let name = req.params.search;
        db.Item
            .find({ "itemName": { "$regex": name, "$options": "i"}})
            .sort({ itemName: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByCategory: function (req, res) {
        db.Item
            .find({ category: req.params.category })
            .sort({ itemName: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllItems: function (req, res) {
        db.Item
            .find(req.query)
            .sort({ itemName: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addItem: function (req, res) {
        console.log("happens in the itemContoller.js")
        console.log(req.body)
        db.Item
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    deleteItem: function (req, res) {
        db.Item
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getStoreItems: function (req, res) {
        //console.log("res: " + res.data)
        db.Item
            .find({ storesid: req.params.storeid })
            .sort({ itemName: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    deleteStoreFromItemList: function(req,res){
        console.log('deletestorefromitemlist called');
        db.Item.findById(req.params.itemId).then(response=>{
            let check=false;
            let index;
           // console.log(response)
            //console.log('itemController');
            response.carriedByStores.forEach((element,i)=>{
               // console.log(element);
              if(element.storeID==req.params.storeId)
              {
                check=true;
                index=i;
              //  console.log('it was found');
              }
            });
            if(check==true)
            {
              response.carriedByStores.splice(index,1);
              console.log(response);
              let newObj={
                  _id:response._id,
                  itemName:response.itemName,
                  category:response.category,
                  carriedByStores:response.carriedByStores
              }
              db.Item.update({_id:req.params.itemId},Update={$set:{carriedByStores:newObj.carriedByStores}},{'new':true}).then((response=>{
                console.log(response)
              })).catch(err=>{console.log(err)});
            }else{
               // console.log('not found')
            }
          }).catch(err=>{console.log(err)});
    }

};