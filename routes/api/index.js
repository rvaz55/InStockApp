const router = require("express").Router();
const store = require("./storeRoutes")
const item = require("./itemRoutes")

// Book routes
router.use("/stores", store);
router.use("/item", item);

module.exports = router;
