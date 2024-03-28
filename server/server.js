require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { Product } = require('./models/productModel');
const UserController = require("./controllers/userController");

const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// MongoDB connection
mongoose
  .connect("mongodb+srv://astchau26:1N0he8jWvWDzCQAe@cluster0.srqa59a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/fresh-market-online", {});
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.json());

// Users APIs
app.get("/api/users", UserController.getAllUsers);
app.get("/api/users/:id", UserController.getUserById, UserController.getUser);
app.post("/api/users", UserController.createUser);
app.patch("/api/users/:id", UserController.getUserById, UserController.updateUser);
app.delete("/api/users/:id", UserController.getUserById, UserController.deleteUser);

// Products APIs
app.get("/products", (req, res) => {
  Product.findOne({}).then((data)=> {
    return res.status(200).json(data)
  });
});



app.listen(HTTP_PORT, () => {
  console.log(`Server running on port ${HTTP_PORT}`);
});

module.exports = app;