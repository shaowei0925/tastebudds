const express = require("express");
const Order = require("../models/order");
const router = express.Router();

const getOrderByUserId = async (req, res, next) => {
  let order;
  try {
    const user_id = req.params.id;
    order = await Order.find({ user_id });
    if (order == null) {
      return res.status(400).json({ message: "No order found!" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

  res.order = order;
  next();
};

router.get("/", async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", getOrderByUserId, async (req, res) => {
  res.status(200).json(res.order);
});

router.post("/", async (req, res) => {
  const { user_id, items, totalAmount } = req.body;
  try {
    const newOrder = new Order({
      user_id: user_id,
      items: items,
      totalAmount: totalAmount,
    });

    const response = await newOrder.save();
    res.status(200).json(response.data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
