'use strict';
module.exports = (sequelize, DataTypes) => {
  var allitem = sequelize.define('allitem', {
    itemID: { 
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      validate: {min: 5, max: 10}
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1]}
    }
  }, {});

  allitem.associate = function(models) {
    // associations can be defined here
    allitem.belongsToMany(models.itemDetail, {
      onDelete: "cascade",
      through: 'storeStock'
    })
  };
  return allitem;
};