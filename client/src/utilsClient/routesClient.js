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
  // Saves a item to the database
  saveItem: function(itemData) {
    return axios.post("/api/items/", itemData);
  },
  // Get items for store when sigend on from items db 
  getStoreItems: function(storename) {
    return axios.get(`/api/items/store/${storename}`);
  },
  // Saves store sign up info
  saveStore: function(storeData) {
    return axios.post("/api/stores/", storeData);
  },
  //This route get triggerd BY the login and uses the vendor email to retrieve the storeID from mongoDB 
  getStore: function(email) {
      return axios.get("/api/stores/login", email);
  },
  //This route gets triggered AFTER being logged in and uses the store's ID (from the mongodDB) 
  //to retrieve the store information (ei- store name, address, and inventory)
  getStoreData: function(storeID) {
    return axios.get(`/api/stores/profilepage/${storeID}`);
}
};
