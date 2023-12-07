const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/user");

router.get("/", async (req, res) => {
  const users = await User.find();
  try {
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "User Existed!" });
  }

  const hash = await bcrypt.hash(password, 10);

  const nUser = new User({
    name: name,
    email: email,
    password: hash,
  });

  try {
    const response = await nUser.save();
    res.status(200).json(response.data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
