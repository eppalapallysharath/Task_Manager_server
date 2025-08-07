const express = require("express");
const Router = express.Router();
const { getProfile, editProfile } = require("../Controllers/userControllers");
const {
  tokenValidator,
  editProfileValidator,
  validateMiddleware,
} = require("../Validators/authValidators.js");
const { checkAuth } = require("../Middlewares/authMiddleware.js");
Router.get(
  "/profile",
  tokenValidator,
  validateMiddleware,
  checkAuth,
  getProfile
);
Router.put(
  "/editProfile",
  tokenValidator,
  editProfileValidator,
  validateMiddleware,
  editProfile
);

module.exports = Router;
