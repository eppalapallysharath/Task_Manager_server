const { body, validationResult } = require("express-validator");

exports.signupValidator = [
  body("name")
    .isLength({ min: 3, max: 30 })
    .trim()
    .isString()
    .withMessage("required name"),
  body("username")
    .isLength({ min: 3, max: 30 })
    .trim()
    .isString()
    .withMessage("required username"),
  body("email")
    .trim()
    .isLength({ max: 40 })
    .isEmail()
    .withMessage("required email"),
  body("password")
    .isLength({ min: 8, max: 25 })
    .isAlphanumeric()
    .withMessage("required password"),

  (req, res, next) => {
    const results = validationResult(req);
    if (!results.isEmpty()) {
      return res
        .status(400)
        .json({ message: "validations error", errors: results.errors });
    }
    next();
  },
];
