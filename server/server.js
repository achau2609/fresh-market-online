require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const { MongoClient } = require("mongodb");

//const app = express();
//mongoose.connect(process.env.dbConn, {});


async function main() {
  const uri = process.env.dbConn;
  const client = new MongoClient(uri);

  try {
    await client.connect();

    await getDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error());

// Get MongoDB databases list
async function getDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}
