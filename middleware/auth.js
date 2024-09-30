import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  // Check if the token exists
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized, please login" });
  }

  try {
    // Verify the token
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded token (user ID) to the request object
    req.body.userId = token_decode.id;

    // Move to the next middleware/route handler
    next();
  } catch (error) {
    console.log(error);
    // Handle token expiration specifically
    res
      .status(403)
      .json({ success: false, message: "Token expired, please refresh" });
  }
};

export default authMiddleware;
