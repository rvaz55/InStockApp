const router = require("express").Router();
const storesController = require("../../controllers/storesController");


// Matches with "api/store/signup"
router
.route("/")
// .get(storesController.findById)
.post(storesController.create);

// Matches with "api/profilepage/:storeid"
router
  .route("/profilepage/:storeid")
  .get(storesController.findById);


module.exports = router;
