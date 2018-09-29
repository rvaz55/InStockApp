'use strict';
module.exports = (sequelize, DataTypes) => {
  var example = sequelize.define('example', {}, {});
  example.associate = function(models) {
    // associations can be defined here
  };
  return example;
};