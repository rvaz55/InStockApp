'use strict';
module.exports = (sequelize, DataTypes) => {
  var store = sequelize.define('store', {}, {});
  store.associate = function(models) {
    // associations can be defined here
  };
  return store;
};