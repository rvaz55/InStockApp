const db = require("../models");

module.exports = {
    // where itemName INCLUDES the search
    findBySearch: function(req, res) {
      db.Item
        .find( { itemName: req.params.search } )
        .sort( { itemName: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByCategory: function(req, res) {
      db.Item
        .find( { category: req.params.category } )
        .sort( { itemName: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAllItems: function(req, res) {
      db.Item
        .find(req.query)
        .sort( { itemName: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    addItem: function(req, res) {
      db.Item
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
