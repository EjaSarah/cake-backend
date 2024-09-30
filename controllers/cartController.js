import userModel from "../models/userModel.js";

// Add to cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById({ _id: req.body.userId });
    let cartData = await userData.cartData;
    // Validate inputs
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    // Find user by ID
    await userModel.findByIdAndUpdate(req.body.userId, cartData);
    res.status(200).json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Error" });
  }
};

// Remove from cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById({ _id: req.body.userId });
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, cartData);
    res.status(200).json({ success: true, message: "Removed from cart" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Error" });
  }
};

// Fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById({ _id: req.body.userId });
    let cartData = await userData.cartData;
    res.status(200).json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };
