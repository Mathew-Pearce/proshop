import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      typeof: String,
      required: true,
    },
    image: {
      typeof: String,
      required: true,
    },
    category: {
      typeof: String,
      required: true,
    },
    description: {
      typeof: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      typeof: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      typeof: Number,
      required: true,
      default: 0,
    },
    price: {
      typeof: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      typeof: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
