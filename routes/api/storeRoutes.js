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

//This route find the account by the user's 'email'
//Matches "api/stores/login"
router
.route("/login")
.get(storesController.findByEmail);

module.exports = router;
