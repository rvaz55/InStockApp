const router = require("express").Router();
const storesController = require("../../controllers/storesController");


// Matches with "api/stores/"
router 
.route("/")
// .get(storesController.findById)
.post(storesController.create);

// Matches with "api/profilepage/:storeid"
router
  .route("/profilepage/:storeid")
  .get(storesController.findById);


router
.route("/submit")
.post(storesController.create);

module.exports = router;
