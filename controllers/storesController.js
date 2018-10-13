const db = require("../models");

module.exports = { 
  findByEmail: function(req, res) {
    //console.log(res)
    ///////////////////////////////////////////////////////////////////////////////////////////
    //The DB is returning all stores not just the one that matches the email specified......///
    ///////////////////////////////////////////////////////////////////////////////////////////
    db.Store
      .find(req.body.email)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    findById: function(req, res) {
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
    }
  }; 