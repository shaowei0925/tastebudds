const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  id: String,
  img: String,
  name: String,
  price: Number,
  quantity: Number,
});

const OrderSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  items: [itemSchema],
  totalAmount: {
    type: Number,
    required: true,
  },
  order_date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Order", OrderSchema);
