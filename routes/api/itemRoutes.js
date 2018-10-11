const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// GET route to api/items
// Gets all items from db that match the category
router
    .route('/category/:category')
    .get(itemController.findByCategory);

// GET route to /api/items/search/searchterm
// Get all items in db matching the search term
router
    .route('/search/:search')
    .get(itemController.findBySearch);

// GET route to /api/items that gets all items currently stored in db
router
    .route('/')
    .get(itemController.findAllItems);

// POST route to /api/items that adds a new item to the db
router
    .route('/')
    .post(itemController.addItem);

    module.exports = router;

