const db = require("../models");

module.exports = {
    findById: function(req, res) {
      db.Store
        .findById(req.params.storeid)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log(req.body);
      db.Store
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  }; 