const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// GET route to api/items
// Gets all items from db that match category
router
    .route('/category/:category')
    .get(itemController.findByCategory);

// route to query db to get all items matching the search term
router
    .route('/search/:search')
    .get(itemController.findBySearch);

// route to get all items stored in collection to then use for categories
router
    .route('/')
    .get(itemController.findAllItems);

// route for store owner to add an item to the items collection
router
    .route('/')
    .post(itemController.addItem);

    module.exports = router;

