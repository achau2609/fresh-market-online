require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const HTTP_PORT = process.env.PORT || 8080;
const app = express();

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
