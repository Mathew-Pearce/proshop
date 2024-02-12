import dotenv from "dotenv";
import express from "express";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
connectDB(); // connect to the database

app.get("/", (req, res) => {
  res.send("API is up and running...");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
