const router = require("express").Router();
const storesController = require("../../controllers/storesController");


// Matches with "/store/signup"
router
.route("/signup")
// .get(storesController.findById)
.put(storesController.create);

router
  .route("/profilepage/:storeid")
  .get(storesController.findById);


module.exports = router;
