require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { Product } = require("./models/productModel");
const UserController = require("./controllers/userController");
const AuthController = require("./controllers/authController");
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
app.get("/users", UserController.getAllUsers);
app.get("/users/:id", UserController.getUserById, UserController.getUser);
app.post("/addStaff", UserController.createUser);
app.patch(
  "/users/:id",
  UserController.getUserById,
  UserController.updateUser
);
app.delete(
  "/users/:id",
  UserController.getUserById,
  UserController.deleteUser
);

// Auth APIs
app.post("/signin", AuthController.signIn);
app.post("/signup", AuthController.signUp);
app.post("/resetPassword", AuthController.resetPassword);

// Products APIs
app.get("/products", (req, res) => {
  Product.findOne({}).then((data) => {
    return res.status(200).json(data);
  });
});

app.listen(HTTP_PORT, () => {
  console.log(`Server running on port ${HTTP_PORT}`);
});

module.exports = app;
