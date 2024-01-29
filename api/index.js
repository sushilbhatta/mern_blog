import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

// middleware function
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: errorMessage,
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!!");
});
