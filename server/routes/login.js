/* eslint-disable no-undef */
require("dotenv").config();

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.get("/", async (req, res) => {
  const token = req.body.token || req.query.token || req.headers["token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    let email = decoded.email;
    const user = await User.findOne({ email });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  let result = false;
  const user = await User.findOne({ email });
  if (user) {
    result = await bcrypt.compare(password, user.password);
  } else {
    return res.status(401).json({ message: "User not existed" });
  }
  if (result) {
    const token = jwt.sign(
      {
        user_id: user._id,
        email: user.email,
      },
      process.env.TOKEN_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ user: user, token: token });
  } else {
    return res.status(400).json({ message: "Incorrect Password." });
  }
});

module.exports = router;
