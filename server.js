import express from "express";
import cors from "cors";
import { connectDB } from "./config/Db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/UserRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = 4000;

//middleware
//information coming from frontend to backend will be parsed using the json middleware
app.use(express.json());
//using cors we can access the backend from any frontend
app.use(cors());

//db connection
connectDB();

//api endpoints that each route hits
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Api Working");
});

//run the express server
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
