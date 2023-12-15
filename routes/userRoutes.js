const express = require("express");
const {
  loginController,
  registerController,
  getAllUsersController
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

// //Auth || POST

router.get("/fetchUsersData", getAllUsersController);


module.exports = router;
