import axios from "axios";

export default {
  // Gets all items
  getItems: function() {
    return axios.get("/api/items");
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a item to the database
  saveItem: function(itemData) {
    return axios.post("/api/items", itemData);
  },
  // Saves vendor sign up info
  saveVendor: function(vendorData) {
    return axios.post("/api/vendors", vendorData);
  },
  //Gets vendor data for profile using id
  getVendor: function(id) {
      return axios.get("/api/items/" + id);
  }
};
