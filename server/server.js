require("dotenv").config();
const userController = require("./controllers/userController");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

const HTTP_PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
  //res.send('hello world')
});

app.get("/api/users", (req, res) => {
  res.json(userController.getAllUser);
  // res.json({
  //   data: userController.getAllUser(),
  //   message: "fetch all users",
  // });
});

app.get("/api/users/:userId", (req, res) => {
  res.json({
    data: userController.getUser(req.params.userId),
    message: "fetch all users",
  });
});

app.post("/api/users", (req, res) => {
  userController
    .createUser(req, res)
    .then((users) =>
      res.json({
        message:
          "add the user: " + req.body.firstName + " " + req.body.lastName,
      })
    )
    .catch((err) => res.json(err));
});

app.get("/api/users/:userId", (req, res) => {
  res.json({ message: "get user with Id: " + req.params.userId });
});

app.put("/api/users/:userId", (req, res) => {
  res.json({
    message:
      "update User with Id: " +
      req.params.userId +
      " to " +
      req.body.fName +
      " " +
      req.body.lName,
  });
});

app.delete("/api/users/:userId", (req, res) => {
  res.json({ message: "delete User with Id: " + req.params.userId });
});

// Connect to MongoDB
mongoose
  .connect(process.env.dbConn, {})
  .then(() => {
    app.listen(HTTP_PORT, () => {
      console.log(`server listening on: ${HTTP_PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//const { MongoClient } = require("mongodb");
// async function main() {
//   const uri = process.env.dbConn;
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();

//     await getDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }
// main().catch(console.error());

// // Get MongoDB databases list
// async function getDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach((db) => {
//     console.log(`- ${db.name}`);
//   });
// }
