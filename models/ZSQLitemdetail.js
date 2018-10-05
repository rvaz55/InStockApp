'use strict';
module.exports = (sequelize, DataTypes) => {
  const itemDetail = sequelize.define('itemDetail', {
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
      validate: {min: 5, max: 10}
    }
  }, {});
  itemDetail.associate = function(models) {
    // associations can be defined here
    itemDetail.belongsToMany(models.allitem, {
      foreignKey: {
        allowNull: false
      },
      through: 'storeStock'
    });
  };
  return itemDetail;
};