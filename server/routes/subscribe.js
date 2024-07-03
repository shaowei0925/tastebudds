const express = require("express");
const router = express.Router();

const Subscriber = require("../models/subscriber");

router.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    const nSubscriber = new Subscriber({
      email: email,
    });

    const response = await nSubscriber.save();
    res.status(200).json(response.data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
