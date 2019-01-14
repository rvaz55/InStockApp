import axios from "axios";

export default {
  // Gets all items
  // getItems: function() {
  //   return axios.get("/api/items");
  // },
  getAllItems: function() { 
    return axios.get("/api/items/")
  },
  // Gets the item with the given search term
  getItemsBySearch: function(search) {
    return axios.get(`/api/items/search/${search}`);
  },
  // Gets the item with the given category selection
  getItemsByCategory: function(category) {
    return axios.get(`/api/items/category/${category}`);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete(`/api/items/deleteitem/${id}`);
  },
  // Get items from the items db using the store id of the user logged in
  getStoreItems: function(storeid) {
    return axios.get(`/api/items/store/${storeid}`);
  },
  // Saves a item to the database
  saveItem: function(item) {
    return axios.post(`/api/items/additem/${item}`);
  },
  // Saves a item to a STORE's inventory
  saveItemToStoreInventory: function(_id, itemName, price, category) {
    return axios.post(`/api/stores/additemtostoreinventory/${_id}/${itemName}/${price}/${category}`);
  },
    // Saves a item to a STORE's inventory
  deleteFromStoreInventory: function(storeId, itemName, itemId) {
    return axios.post(`/api/stores/deletefromstoreinventory/${storeId}/${itemName}/${itemId}`);
  },
  // Saves store sign up info
  saveStore: function(storeData) {
    return axios.post("/api/stores/", storeData);
  },
  //Gets vendor data for profile by finding the email used to log-in
  getStore: function(email) {
      return axios.get(`/api/stores/login/${email}`);
  },
  
  //This route gets triggered AFTER being logged in and uses the store's ID (from the mongodDB) 
  //to retrieve the store information (ei- store name, address, and inventory)
  getStoreData: function(storeID) {
    return axios.get(`/api/stores/profilepage/${storeID}`);
  },

  deleteStoreFromItemList:function(storeId,itemName,itemId){
    return axios.post(`/api/items/deleteStoreFromItemList/${storeId}/${itemName}/${itemId}`);
  }
};
