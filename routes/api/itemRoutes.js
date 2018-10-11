const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// GET route to api/items
// Gets all items from db that match search term
router
    .route('/category/:category')
    .get(itemController.findByCategory);

router
    .route('/search/:search')
    .get(itemController.findBySearch);

router
    .route('/')
    .get(itemController.findAllItems);

    module.exports = router;

