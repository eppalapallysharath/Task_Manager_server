const { UserModel } = require("../Models/authModel.js");
exports.getProfile = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.userInfo.id);
    return res.json(user);
  } catch (error) {
    next({ statusCode: 400, message: "Something went wrong" });
  }
};

exports.editProfile = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;
    const userId = req.userInfo;
    console.log(req.userInfo);
    if (name || username || password || email) {
      const updateUser = await UserModel.findByIdAndUpdate(userId, {
        name,
        password,
        email,
        username,
      });
      console.log(updateUser);
      res.send("updated successfully");
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
