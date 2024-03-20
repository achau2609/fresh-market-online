const User = require("../models/userModel");
const moment = require("moment");

const login = (req, res) => {
  User.find({ email: req.body.email }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      if (docs.length > 0) {
        if (docs[0].secret == req.body.password) {
          res.status(200).json({ status: "success" });
        } else {
          res.send("Invalid Credentials!");
        }
      } else {
        res.send("Invalid Credentials!");
      }
    }
  });
};

const register = async (req, res) => {
  try {
    const user = await new User({
      email: req.body.email,
      username: req.body.username,
      secret: req.body.password,
      creation_date: moment().format("MMMM Do YYYY, h:mm:ss a"),
    });
    await user.save();
    res.status(200).json({ message: "added!" });
  } catch (err) {
    console.log(err);
    if (err.code == "11000") {
      res.send("User Already Exists!");
    } else {
      res.send({ status: "err", message: err });
    }
  }
};
module.exports = {
  login,
  register,
};
