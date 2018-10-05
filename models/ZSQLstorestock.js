'use strict';

//Within this JS i have to push each new item to a general items table
//Then when querying an object I can just search the item ID and grab items from that which
// would save time bc its nots querying all stores to find items
//instead each item has its  own table

module.exports = (sequelize, DataTypes) => {
  const storeStock = sequelize.define('storeStock', {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len: [1]}
    },
    itemID: {
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      validate: {min: 3, max: 10}
    },
    itemWeight: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {min: 1, max: 5}
    },
    itemQuantity: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {min: 0}
    },
    itemPrice: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {min: 1}
    },
    itemCat1: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {min: 1}
    },
    itemCat2: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {min: 1}
    },    
    itemCat3: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {min: 1}
    }
  });
  storeStock.associate = function(models) {
    // associations can be defined here
  };
  return storeStock;
};

