require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { Product } = require("./models/productModel");
const UserController = require("./controllers/userController");
const AuthController = require("./controllers/authController");
const OrderController = require("./controllers/orderController");
const CategoryController = require("./controllers/categoryController");
var cors = require("cors");
const app = express();
let HTTP_PORT = process.env.PORT || 8080;

// MongoDB connection
mongoose.connect(process.env.DB_CONN, {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use(cors());

// Users APIs
app.get("/api/users", UserController.getAllUsers);
app.get("/api/users/:id", UserController.getUserById, UserController.getUser);
app.post("/api/addStaff", UserController.createUser);
app.patch(
  "/api/users/:id",
  UserController.getUserById,
  UserController.updateUser
);
app.delete(
  "/api/users/:id",
  UserController.getUserById,
  UserController.deleteUser
);

// Auth APIs
app.post("/api/signin", AuthController.signIn);
app.post("/api/signup", AuthController.signUp);
app.post("/api/resetPassword", AuthController.resetPassword);

// Products APIs
app.get("/products", (req, res) => {
  Product.findOne({}).then((data) => {
    return res.status(200).json(data);
  });
});

//Orders APIs
app.get("/api/orders", OrderController.getAllOrders);
app.get("/api/orders/order", OrderController.getOrder);
app.put("/api/orders/updateStatus", OrderController.updateOrderStatus);
app.get("/api/orders/todayorders", OrderController.getTodaysPickupOrders);

//Categories API
app.get("/api/categories", CategoryController.getCategories);

app.listen(HTTP_PORT, () => {
  console.log(`Server running on port ${HTTP_PORT}`);
});

module.exports = app;
