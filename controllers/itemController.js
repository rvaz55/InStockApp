const db = require("../models");

module.exports = {
    // where itemName INCLUDES the search 
    findBySearch: function (req, res) {
        let name = req.params.search;
        // console.log(name)
        db.Item
        .find({ "itemName": { "$regex": name, "$options": "i"}})
        .then(itemModels => {
            if(!itemModels.length){
                console.log('no item with that name in database')
            } else if(itemModels.length > 0) {
                // console.log(itemModels)
                // iterate through each resulting item
                console.log('length ' + itemModels.length)
                for(var i=0; i<itemModels.length; i++){
                    // need to iterate through the array of stores from the Items collection
                        // to find all matching store id's from the Store collection
                    for(var j=0; j<itemModels[i].carriedByStores.length; j++){
                        // console.log(j)
                        db.Store
                            .findOne({_id: itemModels[i].carriedByStores[j]})
                            .then(storeModel => {return res.json(storeModel)})
                    }
                }
            }
        })
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
        console.log("res: " + res.data)
        db.Item
            .find({ storesid: req.params.storeid })
            .sort({ itemName: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};