const bcryptjs = require("bcryptjs");
const { UserModel } = require("../Models/authModel.js");

const signupController = async (req, res, next) => {
  try {
    const { name, username, email, password } = req.body;
    const hashPassword = await bcryptjs.hash(password, 12);
    const user = await UserModel.create({
      name: name,
      username: username,
      email: email,
      password: hashPassword,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).send("something went wrong");
    // const
    // next (error)
  }
};

const loginController = (req, res) => {
  res.send("login api");
};

module.exports = { signupController, loginController };
