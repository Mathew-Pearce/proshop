import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

// import data function
const importData = async () => {
  try {
    // clear all data before seeding db
    await Order.deleteMany(); // delete all orders
    await Product.deleteMany(); // delete all products
    await User.deleteMany(); // delete all users

    const createdUsers = await User.insertMany(users); // create users

    const adminUser = createdUsers[0]._id; // get admin user id

    // Strore sample data into a variable.
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    //insert sample data into database
    await Product.insertMany(sampleProducts); // create sample products
    console.log("Data Imported Successfully".green.inverse);

    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`.red.inverse);
    process.exit(1);
  }
};
// destroy data function
const destroyData = async () => {
  try {
    await Order.deleteMany(); // delete all orders
    await Product.deleteMany(); // delete all products
    await User.deleteMany(); // delete all users
    console.log("Data Destroyed Successfully".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
