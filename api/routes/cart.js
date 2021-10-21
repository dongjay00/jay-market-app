const Cart = require("../models/Cart");
const { verifyToken } = require("./verifyToken");

const router = require("express").Router();

// 새 카트 생성
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
