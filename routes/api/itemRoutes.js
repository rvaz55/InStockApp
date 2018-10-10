const express = require('express');
const router = express.Router();
const itemController = require("../../controllers/itemController");

// GET route to api/items
// Gets all items from db
router
    .route('/:search')
    .get(itemController.findBySearch);

module.exports = router;
