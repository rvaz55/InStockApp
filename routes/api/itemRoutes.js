const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// Matches with "api/store/:storeid"
router.route("/")
  .get(itemController.findById)
  .post(itemController.create);

// Matches with "api/profilepage/:storeid"
router
  .route("/profilepage/:storeid")
  .get(itemController.findById)
  .put(itemController.update)
  .delete(itemController.remove);

module.exports = router;
