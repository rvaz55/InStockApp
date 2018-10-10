const router = require("express").Router();
const store = require("./storeRoutes")
const items = require("./itemRoutes")

// Book routes
router.use("/stores", store);
//TODO: router.use("/items", item);
router.use("/items", items);

module.exports = router;
