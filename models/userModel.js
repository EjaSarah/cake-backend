import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  //added minimize false so cart data can be created without any data

  { minimize: false }
);

// Create or use existing model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
