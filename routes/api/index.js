const router = require("express").Router();
const store = require("./storeRoutes")
const item = require("./itemRoutes")

// Book routes
router.use("/stores", store);
//TODO: router.use("/items", item);

module.exports = router;
