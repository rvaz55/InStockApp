const router = require("express").Router();
const storesController = require("../../controllers/storesController");


// Matches with "api/stores/"
router 
.route("/")
// .get(storesController.findById)
.post(storesController.create);

// Matches with "api/profilepage/:storeid"
router
  .route("/profilepage/:storeid")
  .get(storesController.findById);

//This route find the account by the user's 'email'
//Matches "api/stores/login"
router
.route("/login/:email")
.get(storesController.findByEmail);

// POST route to /api/stores/additemtostoreinventory/:item that adds a 
//new item to the store's inventory
router
    .route('/additemtostoreinventory/:_id/:itemName/:price/:category')
    .post(storesController.addItemToInventory);

// POST route to /api/stores/deletefromstoreinventory/:item that adds a 
//new item to the store's inventory
router
    .route('/deletefromstoreinventory/:storeId/:itemName/:itemId')
    .post(storesController.deleteItemFromInventory);

module.exports = router;
