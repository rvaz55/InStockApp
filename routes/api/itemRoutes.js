const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// GET route to /api/items that gets all items currently stored in db
// POST route to /api/items that adds a new item to the items db
router
    .route('/')
    .get(itemController.findAllItems)

router
    .route('/additem/:add')
    .post(itemController.addItem);

// GET route to api/items/storeid to get all items stored in db for particular store
router
    .route('/store/:storename')
    .get(itemController.getStoreItems);

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

    module.exports = router;

