import dotenv from "dotenv";
import express from "express";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import { notFoundHandler, errorHandler } from "./middleware/errorMiddleware.js";

//Config
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

//Connect to the database
connectDB();

//Routes
app.get("/", (req, res) => {
  res.send("API is up and running...");
});

app.use("/api/products", productRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

//Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
